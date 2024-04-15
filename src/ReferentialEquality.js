import { useEffect, useMemo, useState } from "react";

const ReferentialEquality = () => {
  //even if we are changing isDark which is not related to (age, name of person) it'll re-render our page
  //as person is an object, it'll create a brand new object(redefining this object)
  // the refined obj is not same as the previous object

  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [isDark, setIsDark] = useState(false);

  // const person = { age, name };
  const person = useMemo(() => {
    //this object will only redefined when age and name has changed, otherwise it won't
    return { age, name };
    //if we want to compare/do with any objects/arrays based on previous value, should use useMemo, otherwise on every render it'll give a new reference
    // Also, the useEffect will be called on every render, even it's own dependency didn't change
    //there is no use of this useEffect
  }, [age, name]);

  useEffect(() => {
    //while changing dark, this will call. Bcz as it is an object on rendering it'll define a new obj
    //so, it'll think the person has changed, we need to log this message
    //to overcome this we have useMemo
    console.log(person);
  }, [person]);

  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      <form action="">
        Age:{" "}
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Dark:{" "}
        <input
          type="checkbox"
          value={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
      </form>
    </div>
  );
};

export default ReferentialEquality;
