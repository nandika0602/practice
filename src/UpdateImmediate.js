import { useEffect, useState } from "react";

const UpdateImmediate = () => {
  const [count, setCount] = useState(0);

  const adjust = (val) => {
    setCount((pre) => {
      return pre + val;
    });
  };
  //not to use more useEffects
  useEffect(() => {
    console.log(count);
  }, [count]);

  //it doesn't change until the very next render
  //means log(var) or your state var won't get updated until the next render
  //so better to go with useEffect() and log inside the variable iniside this and add the dependency also
  return (
    <div>
      <button onClick={() => adjust(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => adjust(1)}>+</button>
    </div>
  );
};
export default UpdateImmediate;
