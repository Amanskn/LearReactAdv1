import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users,setUsers] = useState([]);
  
  async function getUsers() {
    const response = await fetch(url);
    const users = await response.json();

    setUsers(users);

    console.log("The is the data:-",users);
  }

  // ----------this is the correct one
  useEffect(()=>{
    getUsers();
  },[])            // <<<<----------make sure to pass a dependency array here , else it will go on an infinite loop

  // ------------Please avoid this, because useEffect cannot return a promise and getUsers will return a promise why? because it is an async function, Got it
  // useEffect(getUsers)




  return <>
    <h3>github users</h3>
  </>
};

export default UseEffectFetchData;
