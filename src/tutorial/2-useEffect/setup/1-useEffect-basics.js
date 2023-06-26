import React, { useState, useEffect } from 'react';
// by default useEffect runs after every re-render
// cleanup function
// second parameter


// console.log("At start outer most normal log outside the component")

let num=90;

const UseEffectBasics = () => {
  // console.log("first log in component")
  const [value,setValue]=useState(0);
  useEffect(()=>{
    console.log(value,"useEffect Called");
    
    if(value>=1){
      document.title=`Title Changed (${value})`
    }
    

    // --------------Here I am doing a check to see the variety in output, depending on variable position inside console.log, and nothing more than that
    // console.log(num,"This is the title :-",document.title,num,"Aman");
    // console.log("This is the title :-",document.title,num,"Aman");
    
  })
  console.log("normal log after useEffect")
  const handleClick = ()=>{

    setValue(value+1)


    // ------------Just a check to see whether page's title can be changed via normal function or not, and I found that Yes, we can
    // setValue(value+1);
    // if(value>=1){

    //   document.title=`Title Changed via UseStae (${value})`
    // }


// ------------Just a check to do the same stuff via passing a function in state handler function
    // setValue((pre)=>{

    //   if(value>=1){
  
    //     document.title=`Title Changed via UseStae (${value})`
    //   }
    //   return value+2;
    // });



    // console.log(value,"in useState after");
  }
  
  return <>
    <h2>{value}</h2>
    <button className='btn' onClick={handleClick}>click me</button>
  </>;
};

export default UseEffectBasics;

// console.log("At end outer most normal log outside the component")