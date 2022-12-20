import { useState, useReducer } from "react";
import Modal from "./Modal";
import "./styles.css";

const banana = (state, action) => {
  return state;
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello world"
};
export default function App() {
  const [name, setName] = useState(false);
  const [state, dispatch] = useReducer(banana, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ action: "ADD_ITEM" });
    } else {
    }
  };
  return (
    <div className="App">
      {state.isModalOpen && <Modal />}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Add Item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <button>Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h1>{person.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
