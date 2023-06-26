import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  let [people,setPeople]=React.useState(data);
  const [btn,setBtn]=React.useState("remove");
  
  
  const toogleContent=()=>{
    if(btn=='remove'){
      setBtn('fetch')
      setPeople([])
    }
    else{
      setBtn('remove');
      setPeople(data)
    }
  }
  return <>
  {people.map((person)=>{
    return (
      <div className='item' key={person.id}>
        <h3>{person.name}</h3>
        <button>Remove</button>
      </div>
    )
  })}
  <h2>UseState Array example</h2>
  <button className='btn' onClick={toogleContent}>{btn}</button>
  </>;
};


export default UseStateArray;
