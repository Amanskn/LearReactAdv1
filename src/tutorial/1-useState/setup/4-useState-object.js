import React, { useState } from 'react';

const UseStateObject = () => {
  
  const [person,setPerson]=useState({
    name:'aman',
    age:25,
    message:'random message'
  });
  const changeMsg = ()=>{
    if(person.message=="random message")
      // overriding the message here, Got it
      setPerson({...person,message:"hello world!"})
    else
    // overriding the message here, Got it
      setPerson({...person,message:"random message"})
  }
  return <>
    <h2>useState object example</h2>
    <h3>{"Name :- "+person.name}</h3>
    <h3>{"Age :- "+person.age}</h3>
    <h3>{"message :- "+person.message}</h3>
    <button className='btn' onClick={changeMsg}>Change message</button>
  </>
};

export default UseStateObject;
