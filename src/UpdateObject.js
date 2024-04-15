import { useState } from "react";

const UpdateObject = () => {
  const [user, setUser] = useState({
    name: "",
    place: "",
    age: 50,
  });

  const handleChange = (e) => {
    //error
    // setUser(user.name = e.target.value)
    //name only in obj
    // setUser({name: e.target.value})
    //correct
    // setUser({...user, name: e.target.value})
    setUser((pre) => {
      return {
        ...pre,
        name: e.target.value,
      };
    });
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default UpdateObject;
