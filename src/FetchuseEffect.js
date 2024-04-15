import { useEffect, useState } from "react";

const FetchuseEffect = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const url = "#....";

  useEffect(() => {
    //the best way to cancel fetch req is abortcontroller,

    const controller = new AbortController();
    //inside the fetch need to pass a signal
    //this signal is comes from our controller, so its just controller.signal
    fetch(url, { signal: controller.signal })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));

    return () => {
      //make sure you always cancel the fetch request, every single time the useEffect changes
      controller.abort();
    };
  }, [url]);
  return "hi";
};
export default FetchuseEffect;

//1st => 0ms + 150ms = 150ms
//2nd => 100ms + 300ms = 400ms
//3rd => 50ms + 200ms = 250ms

//1st, 3rd, 2nd... data is filled with 2nd req
