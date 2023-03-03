import { useEffect, useRef, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const timeout = useRef();

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      timeout.current && clearTimeout(timeout.current);
      // start timing for event "completion"
      timeout.current = setTimeout(
        () =>
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
        200
      );
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
