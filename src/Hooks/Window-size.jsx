import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    scrollY: 0,
  });

  useEffect(() => {
    function updateSize() {
      setSize({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
        scrollY: typeof window !== "undefined" ? window.pageYOffset : 0,
      });
    }

    updateSize();

    window.addEventListener("resize", updateSize);
    window.addEventListener("scroll", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("scroll", updateSize);
    };
  }, []);

  return size;
}
