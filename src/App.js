import { useRef, useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  //can avoid more re-renders while using refs
  const email2 = useRef();
  const phone2 = useRef();

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
  return (
    <div>
      <form action="" onSubmit={submit}>
        <label htmlFor="">Email</label>
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
      </form>
    </div>
  );
};

export default App;
