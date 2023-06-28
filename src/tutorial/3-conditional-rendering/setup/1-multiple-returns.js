import { toBeRequired } from '@testing-library/jest-dom';
import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';



const MultipleReturns = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);
  const [user,setUser] = useState('default user');

  // console.log("This is the loading value :-",loading)
  useEffect(()=>{
    fetch(url)
    .then((resp)=>{
      if(resp.status>=200 && resp.status<=299)
        return resp.json()
      else{
        setIsLoading(false);
        setIsError(true)
        throw new Error(`No data fetched and the status code is:- ${resp.status}`)
        // console.log(first)
      }
    })
    .then((user)=>{
      // A simple check
      // for(let i=0;i<10000000;i++)

      const {login}=user;
      setUser(login);
      setIsLoading(false); 
    })
    // -------------this catch block will only handle Network errors or the explicit errors thrown by us. As we are doing in case of 404 http status code inside then block
    .catch((err)=>{
      console.log("An Error came:-",err)
    })
  },[])


  if(isLoading){

    return <>
      <h2>Loading...</h2>
      
    </>;
  }
  else if (isError){
    return <>
    <h2>Error...</h2>
    </>
  }
  else{

    return <h2>{user}</h2>;
  }
};

export default MultipleReturns;
