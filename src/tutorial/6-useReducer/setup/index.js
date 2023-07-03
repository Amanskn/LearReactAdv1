import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(false);
      setPeople([
        ...people,
        {
          id: new Date().getTime().toString(),
          name: name,
        },
      ]);
    } else {
      setShowModal(true);
    }
  };
  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
        </div>
        <button>Add</button>
      </form>
      <div className="item">
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div>
              <h2>{name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
