import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue]=useState(0)
  const resetFunction=()=>{
    // console.log('called')
    setValue(0);
  }

  const complexIncrease = ()=>{
    setTimeout(()=>{
      // Just a check
      console.log("inside complex increase")
      // setValue(value+1);

      // passing a function inside  set state function , Why??
      // Ans:- to take into consideration the latest updated state value, Got it?
      setValue((previousValue)=>{
          return previousValue+1;
      })
    },2000)
  }


  return <>
    <section style={{margin:'4rem 0'}}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={()=>{setValue(value-1)}}>decrease</button>
      <button className='btn' onClick={resetFunction}>reset</button>
      <button className='btn' onClick={()=>{setValue(value+1)}}>increase</button>
    </section>

    {/* Going to make more complex counter */}
    <section style={{margin:'4rem 0'}}>
      <h2>more complex counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={complexIncrease}>increase later</button>
    </section>
  </>;
};

export default UseStateCounter;
