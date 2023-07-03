import React, { useEffect, useRef } from "react";

// preserves value (this is the similarity of useRef hook with useState hook)
// DOES NOT trigger re-render (this is the difference of useRef hook with useState hook)
// useRef is mostly used to target DOM nodes/elements

const UseRefBasics = () => {
  const inputContainer = useRef(null);
  const divContainer = useRef(null);
  const btnContainer = useRef(null);
  console.log(inputContainer, "This is the value of inputContainer outside");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      inputContainer,
      "This is the value of inputContainer on submission"
    );
    console.log(inputContainer.current.value);
    console.log(btnContainer.current);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log("useEffect ran");

    // --------this is to focus on the input tag as soon as the page loads
    inputContainer.current.focus();
  }, []);
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={inputContainer} />
          <button ref={btnContainer}>Submit </button>
        </div>
      </form>
      <div ref={divContainer}>Simple div</div>
    </>
  );
};

export default UseRefBasics;
