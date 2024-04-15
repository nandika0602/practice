import { useEffect, useState } from "react";
const PRICE = 5;
const DerivedState = () => {
  const [quantity, setQuantity] = useState(1);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  //if we want to display price
  // const [ itemPrice, setItemPrice ] = useState(0)

  //bcz on every render(whenever quantity chnages) it'll come to this stmt and perform this
  const itemPrice = quantity * PRICE;
  //if we want ot display fullname
  const fullname = firstName + lastName;

  const add = () => {
    setQuantity(quantity + 1);
    // setItemPrice(quantity * PRICE)
  };

  //NO NEED
  // useEffect(() => {
  //     setItemPrice(quantity * PRICE)
  // }, [quantity])

  return (
    <div>
      <button onClick={add}>Add item</button>
      <p>{itemPrice}</p>
      <p>{fullname}</p>
    </div>
  );
};

export default DerivedState;
