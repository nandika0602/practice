import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(1900);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowSize(wndow.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);
    //need to clean up API calls and eventlistener everytime, otherwise it'll stick to the window even the component is unmounted
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return useWindowSize;
};

export const Component1 = () => {
  const windowSize = useWindowSize();
  return <div>Component 1</div>;
};

export const Component2 = () => {
  const windowSize = useWindowSize();
  return <div>Component 2</div>;
};
