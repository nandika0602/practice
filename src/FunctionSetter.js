import { useState } from "react";

const FunctionSetter = () => {
  //if we are having more states in a row, React will batches them all together and does all of them at the same time.
  //so it never had a chance to change in between these 2 diff functions

  const [count, setCount] = useState(0);
  const adjust = (val) => {
    /****************************************************************/
    // 0 + 1;
    //this is scheduled and will update in future
    // setCount(count + val); //1
    // 0 + 1; //same here
    // setCount(count + val); //2 exp:2

    /****************************************************************/
    //better to go with this, if we have to chnage our state var based on pre state
    setCount((pre) => {
      return pre + val;
    });
    setCount((pre) => {
      return pre + val;
    });
  };
  return (
    <div>
      <button onClick={() => adjust(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => adjust(1)}>+</button>
    </div>
  );
};
export default FunctionSetter;
