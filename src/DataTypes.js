import { useEffect, useState } from "react";

const DataTypes = () => {
  //if it is a primitive type [passed by value]
  const [val, setVal] = useState(0);

  //if it is a reference type [passed by reference]
  const [vall, setVall] = useState({
    name: "Nandy",
    age: 21,
  });
  const handleClick = () => {
    //if we try to update same val, it won't render the page.
    //As the state doesn't update with new value
    setVal(0);

    //if we try to update same val, it WILL render the page.
    //As the state updated with new reference even the data is same
    //it is pointing to address not with value/object
    //this is diff address
    setVall({
      name: "Nandy",
      age: 21,
    });
  };

  // useEffect(() => {
  //prevent from unnecessary render
  // }, [val] or [ vall.age])

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default DataTypes;
