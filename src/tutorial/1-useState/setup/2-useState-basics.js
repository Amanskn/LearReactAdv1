import React, { useState } from 'react';

// useState:-  it is a function

const UseStateBasics = () => {
  // Just a check to see whether useState is a function or not 
  // console.log(typeof useState)

  // console.log(useState("Aman"))
  // console.log("Akjkl")
  // console.log("A")


  // const text = useState("Random text")[0];
  // const setText = useState("Random text")[1];


   const [text,setText] = useState("Random Text");

  // console.log(text)
  const handleClick=()=>{
    if(text==='Random Text')
      setText("Aman")
    else
      setText("Random Text")
    console.log(text)
  }

return<>
    <h2>{text}</h2>
    <button className='btn' onClick={handleClick}>Click me</button>
    
  </> 

}



export default UseStateBasics;
