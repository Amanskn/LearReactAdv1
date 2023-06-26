import React from 'react';

console.log("Hi")
const ErrorExample = () => {
  let title="random title"
  const handleClick=(msg)=>{
    title="Aman";
    alert(msg)
    alert("title="+title)
  }
  return (
    <>
    <h2>
      {title}
    </h2>
    <button className='btn' onClick={function (){handleClick("Passed msg")}}>Click me</button>
    </>
  )
};

export default ErrorExample;
