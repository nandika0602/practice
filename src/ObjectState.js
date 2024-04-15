import { useState } from "react";

const ObjectState = () => {
  //instead of having state var for each field, better to go with a single state with object
  // const[firstName, setfirstName] = useState('')
  // const[lastName, setlastName] = useState('')
  // const[gender, setgender] = useState('')
  // const[city, setcity] = useState('')
  // const[postcode, setpostcode] = useState('')
  // const[email, setemail] = useState('')
  // const[password, setpassword] = useState('')

  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    city: "",
    postcode: "",
    email: "",
    password: "",
  });

  const hanndleChange = (e) => {
    setform((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <input type="text" name="firstName" id="" onChange={hanndleChange} />
      <input type="text" name="lastName" id="" onChange={hanndleChange} />
      <input type="text" name="gender" id="" onChange={hanndleChange} />
      <input type="text" name="city" id="" onChange={hanndleChange} />
      <input type="text" name="postcode" id="" onChange={hanndleChange} />
      <input type="text" name="email" id="" onChange={hanndleChange} />
      <input type="text" name="password" id="" onChange={hanndleChange} />
    </div>
  );
};
