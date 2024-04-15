import { useEffect, useState } from "react";

const Initilizing = () => {
  //if we are not giving any initial value, it'll throw error
  //so better to give explicit values or optional chaining
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //this fn will called after the page renders
    fetch("https://dummyjson.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default Initilizing;
