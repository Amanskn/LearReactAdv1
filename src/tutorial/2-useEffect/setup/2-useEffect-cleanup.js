import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size,setSize]=useState(window.innerWidth);
  
  const resetSize =()=>{
        setSize(window.innerWidth);
        console.log("resize happened")
      }
  
  // ----------------Here we are using a cleanup function , which is a good practice, to remove the eventlistener
  useEffect(()=>{
    window.addEventListener('resize',resetSize)
    console.log("UseEffect called")
    return ()=>{
      console.log("Cleanup")
      window.removeEventListener('resize',resetSize)
    }
  })
  
  // ----------------------Here we are achieving the same goal( using empty dependency array), 
  // -----------------i.e registering the event only on initial rendering and no need of removing it (as we are doing above) before further render happenes
  // ------------ but the thing is that every time you would not be able to tackle the situation with empty dependency array, Hence a good practice is to use
  // ------------------------cleanUp function, We will look at the usecases in further coming topics
  // useEffect(()=>{
  //   window.addEventListener('resize',resetSize)
  //   console.log("UseEffect called")
    
  // },[])


  return <>
    <h2>useEffect cleanup</h2>
    <h3>&#123; {size} &#125;</h3>
  </>;
};

export default UseEffectCleanup;
