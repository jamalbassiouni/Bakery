import React from "react";
import "../Styles/BackToTopBtn.scss";
import useWindowSize from "../Hooks/Window-size";
import { ImArrowUp2 } from "react-icons/im"
export default function BackToTopBtn() {
  const { scrollY } = useWindowSize();
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className={`style ${scrollY > 100 ? "active" : null}`}
        onClick={scrollUp}
      >
        <i><ImArrowUp2 className="arrow" /></i>
      </button>
    </>
  );
}