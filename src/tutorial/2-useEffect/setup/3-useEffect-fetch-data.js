import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users,setUsers] = useState([]);
  
  async function getUsers() {
    // ----------- A simple loop to visualize that it takes some time to fetch data
    // for(let i=0;i<10000000000;i++){

    // }
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
    <ul className="users">
      {users.map((user)=>{
        const {avatar_url, html_url,id,login}=user;
      return (
        <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h4>{login}</h4>
            <a href={html_url}> profile</a>
          </div>

          
        </li>

        
      )
    })}
    </ul>
  </>
};

export default UseEffectFetchData;
