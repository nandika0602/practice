import { useMemo, useRef, useState } from "react";

const Filter = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  //new array will be created on every render, to overcome this should use useMemo
  const filteredItems = useMemo(() => {
    return items.filter((i) => i.includes(query));
  }, [query, items]);

  const inputVal = useRef();
  console.log(items);

  //NAIVE APPROACH
  //const [filteredItems, setFilteredItems] = useState([]);

  const hanldeValue = (e) => {
    e.preventDefault();
    const value = inputVal.current.value;
    if (!value.trim()) return;
    else {
      setItems((pre) => {
        return [...pre, value];
      });
      //   setFilteredItems((pre) => {
      //     return [...pre, value];
      //   });
    }
    inputVal.current.value = "";
  };

  //NAIVE APPROACH
  //   const search = (e) => {
  //     const fil = items.filter((i) => i.includes(e.target.value));
  //     setFilteredItems(fil);
  //   };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <form action="" onSubmit={hanldeValue}>
        <input type="text" ref={inputVal} placeholder="add item" />
        <button type="submit">ADD</button>
      </form>
      {filteredItems.map((i) => {
        return <p>{i}</p>;
      })}

      {/* NAIVE APPROACH
      {filteredItems.map((i) => {
        return <p>{i}</p>;
      })} */}
    </div>
  );
};

export default Filter;
