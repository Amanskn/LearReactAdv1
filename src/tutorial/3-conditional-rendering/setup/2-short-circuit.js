import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]=useState('h');

  const [isError,setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world'&& "Aman";

  return <>

    <h1>{text || "Alternate text"}</h1>
    <button className='btn' onClick={()=>{setIsError(!isError)}}>Toggle error</button>
    {isError && <h1>error...</h1> }

    {/* example of ternary operator */}
    {isError?<h1>Error... using ? :</h1>: <h1>No error... using ? :</h1> }




    {/* <h2>{text && "I will be shown if first text is there"}</h2>
    <h2>{!text && "I will be shown if first text is not there"}</h2>
    <h2>{text && <b>I am inside a component and the component will be rendered iff first text is present</b> }</h2> */}
    
    
    
    {/* <h1>firstValue is :-{firstValue}</h1>
    <h1>secondValue is :-{secondValue}</h1> */}
     
  
    {/* ----------Error:- Why? because inside return there cannot be if block */}
    {/* {if(true){console.log("Inside if")}} */}
  </>
};

export default ShortCircuit;
