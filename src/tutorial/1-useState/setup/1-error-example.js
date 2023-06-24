import React from 'react';

const ErrorExample = () => {
  let title="random title"
  const handleClick=(msg)=>{
    alert(msg);
  }
  return (
    <>
    <h2>
      {title}
    </h2>
    <button className='btn' onClick={function (){handleClick("Passed msg123")}}>Click me</button>
    </>
  )
};

export default ErrorExample;
