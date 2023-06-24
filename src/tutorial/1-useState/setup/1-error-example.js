import React from 'react';

const ErrorExample = () => {
  let title="random title"
  return (
    <>
    <h2>
      {title}
    </h2>
    <button className='btn' onClick={()=>{alert('Hello')}}>Click me</button>
    </>
  )
};

export default ErrorExample;
