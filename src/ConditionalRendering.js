import { useEffect, useState } from "react";

const ConditionalRendering = ({ id }) => {
  //THIS IS WRONG!!!!
  // if(!id) return null;
  // const [count, setCount] = useState(0);
  // useEffect(() => {

  // })
  return (
    <div>
      {/* should not use early return that is not a good practice
                better to use conditional rendering
                Also, all react hooks should be placed on top as per React recommendation
                bcz if we are placing hooks after return stmt, that would be like conditional hooks*/}
    </div>
  );
};

export default ConditionalRendering;
