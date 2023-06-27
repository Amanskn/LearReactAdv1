import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users,setUsers] = useState([]);
  async function logJSONData() {
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log("The is the data:-",jsonData);
  }

  // ----------this is the correct one
  useEffect(()=>{
    logJSONData();
  })

  // ------------Please avoid this, because useEffect cannot return a promise and lodJSONData will return a promise why? because it is an async function, Got it
  // useEffect(logJSONData)



  
  return <>
    <h3>github users</h3>
  </>
};

export default UseEffectFetchData;
