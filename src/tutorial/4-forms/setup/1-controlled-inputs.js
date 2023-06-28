import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // setting some state values here
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    // -------A simple check
    // console.log("This is the value of e:-", e)

    // -------this is to avoid the refresh of the page as soon as the form is submitted
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };

      // -------------------direct way of setting the people state
      // const newPeople = [...people, person];
      // setPeople(newPeople);

      // -------------------direct way of setting the people state
      // setPeople([...people,person]);

      // -------------another way(using callback function) of setting the people state
      setPeople((people) => {
        return [...people, person];
      });

      setFirstName("");
      setEmail("");
    } else {
      alert("Please fill both values");
    }
    console.log("form submitted");
  };

  // ---------A simple check
  const check = () => {
    console.log("Check");
    return "Aman";
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                // --------------A simple check
                // console.log("E on first name:-", e);
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          {/* ----------A simple check */}
          {/* <button type='submit' onClick={check}>Add person</button> */}
          <button type="submit">Add person</button>
        </form>

        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
