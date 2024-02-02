import { useEffect, useRef, useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  //can avoid more re-renders while using refs
  const email2 = useRef();
  const phone2 = useRef();
  //interval
  const [c, sc] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    console.log(email, phone);
  };

  const submit2 = (e) => {
    e.preventDefault();
    console.log(email2, phone2);
    console.log({
      email: email2.current.value,
      phone: phone2.current.value,
    });
  };
  
  //That interval is going to keep running endlessly until the component is unmounted. Why? Because the function () => clearInterval(interval); is known as the cleanup function and it is only going to be executed only when the component is unmounted.
  useEffect(() => {
    console.log("empty mounted");
    const clean = setInterval(() => {
      console.log("empty interval");
      //not aware of updated val, as it has [] dependency
      // sc(c+1)
      //without cleanup, if any render occurs, another setinterval will be created on browser
      sc((pre) => pre + 1);
    }, 1000);
    // return () => {
    //   console.log("empty cleaning...");
    //   clearInterval(clean);
    // };
  }, []);
  //this should call only once and not on re-rendering

  useEffect(() => {
    console.log('empty MOUNTED');
    // return () => {
    //   console.log('empty CLEANING');
    // }
  }, [])

  useEffect(() => {
    console.log("c_mounted");
    const clean = setInterval(() => {
      console.log("c_interval");
      //once c is updated, this useeffect will get called as its dependency is c. So, it'll create one more interval in browser
      // sc(c + 1);
      // sc((pre) => pre + 1);
    }, 1000);
    return () => {
      console.log("cleaning_c.....");
      clearInterval(clean);
    };
  }, [c]);

  return (
    <div>
      <form action="" onSubmit={submit}>
        <label htmlFor="">Emailllll</label>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">PhoneNo</label>
        <input
          type="number"
          placeholder="Phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      <form action="" onSubmit={submit2}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          ref={email2}
          //should not give value, as react will get confused whether to use controlled(state) or uncontrolled(ref) component
          // value={email2.current.value}
          placeholder="Email"
        />
        <label htmlFor="">PhoneNo</label>
        <input
          type="number"
          ref={phone2}
          // value={phone2.current.value}
          placeholder="Phone number"
        />
        <button type="submit">Save</button>
        {c}
      </form>
    </div>
  );
};

export default App;
