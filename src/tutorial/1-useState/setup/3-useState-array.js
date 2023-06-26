import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  let [people,setPeople]=React.useState(data);
  const [btn,setBtn]=React.useState("remove all items");
  
  
  const toggleContent=()=>{
    console.log("Called")
    if(btn=='remove all items'){
      setBtn('fetch all items')
      setPeople([])
    }
    else if(people.length==0 && btn!='fetch all items'){
      setBtn('fetch all items')
      // setPeople([])
    }
    else{
      setBtn('remove all items');
      setPeople(data)
    }
  }


  const removeEachPerson = (id)=>{
    const newPeople = people.filter((person)=>{
      return person.id!=id
    })
    setPeople(newPeople);
    if(newPeople.length==0){
      toggleContent();
    }
  }



  return <>
  {people.map((person)=>{
    return (
      <div className='item' key={person.id}>
        <h3>{person.name}</h3>
        <button onClick={()=>{removeEachPerson(person.id)}}>Remove</button>
      </div>
    )
  })}
  <h2>UseState Array example</h2>
  <button className='btn' onClick={toggleContent}>{btn}</button>
  </>;
};


export default UseStateArray;
