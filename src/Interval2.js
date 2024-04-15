import { useEffect, useState } from "react";

const Interval = () => {
  ///1st
  const [number, setNumber] = useState(0);
  //2nd
  const [toggle, setToggle] = useState(false);
  //4ht
  const [user, setUser] = useState({});
  const id = useLocation().pathname().split("/")[2];

  //1st
  useEffect(() => {
    //it'll run infinite loop, bcz on every sec the number is changing
    //number is the dependency, so the fn is getting called again and again
    const interval = setInterval(() => {
      setNumber(number + 1);
      //this is better, it doesn't give infinte loop, if we are not giving any dependency
      setNumber((pre) => pre + 1);
      //if any new render occurs, it'll create an another interval without clearing previous one. So it'll run double
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [number]);

  //2nd
  useEffect(() => {
    console.log("useeffect");
    //this fn will run before the actual useEffect(clear the fn) that we did in previous useEffect
    return () => {
      console.log("before running the effect, cleaning the previous effect");
      //clear something from the previous effect
    };
  }, [toggle]);

  //3rd
  useEffect(() => {
    let subscribed = false;
    //the scenario is a button is in a page, when clicking the button, it'll take to another page.
    //On the 2nd page on mounted state an API will be called.
    //Before the data is fetched, we return back to 1st page.
    //After we went to 1st page, this alert message is displayed.
    //Which means, even we are not in the 2nd page(2nd page is unmounted), it still trying to update the state variable
    if (!subscribed) {
      fetch("");
      alert("updating state");
    }
    //but it should be cancelled immediately, as soon as we leave the page(component): cleanup function
    return () => {
      subscribed = true;
    };
  });

  //4th
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // const cancelToken = axios.CancelToken.source()
    // {signal} => {cancelToken: cancelToken.token}
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        //if I clicked 1st user, 2nd user and 3rd user.
        //now the url is 3 as I clicked the 3rd user last.
        //But still it updates the state with 1st user and 2nd user even the url is turned to 3.
        //what we need to do is, have to clear the previous API result, if any further action done
        //1st => handling boolean, 2nd => AbortController
        setUser(data);
      })
      .catch((err) => {
        // if(axios.isCancel(err))
        if (err.name === "AbortError") {
          console.log("cancelled");
        }
      });

    return () => {
      console.log("cancelled");
      controller.abort();
    };
  }, [id]);
  return (
    <div>
      {number} 1staa
      <div>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <Link to="/users/1">Fetch User1</Link>
      </div>
    </div>
  );
};

export default Interval;
