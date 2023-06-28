import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]=useState('k');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world'&& "Aman";

  return <>

    <h1>firstValue is :-{firstValue}</h1>
    <h1>secondValue is :-{secondValue}</h1>
     
  
    {/* ----------Error:- Why? because inside return there cannot be if block */}
    {/* {if(true){console.log("Inside if")}} */}
  </>
};

export default ShortCircuit;
