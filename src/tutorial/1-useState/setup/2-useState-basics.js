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


  // Note :- hooks must be inside the React function component  body
  // Note :- hooks can never be called conditionally, Please note that I am talking about hooks not the stateHandler function returned by hook, Hope you got it 
   let [text,setText] = useState("Random Text");
   
   // console.log(text)
   const handleClick=()=>{
     if(text==='Random Text')
      // Error :- you cannot invoke hook inside normal function
      // var [text,setText] = useState("Random Text");
     setText("Aman")
     else
     // Error :- you cannot invoke hook inside normal function
    //  var [text,setText] = useState("Random Text");
      setText("Random Text")
    console.log(text)
  }

return<>
    <h2>{text}</h2>
    <button className='btn' onClick={handleClick}>Click me</button>
    
  </> 

}



export default UseStateBasics;
