import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function AddPersonForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text"
        placeholder="Add new contact"
        onChange={props.onChange}
        value={props.person} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const listItems = props.data.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setContacts([...contacts, person])
    setPerson("")
  }

  return (
    <div>
      <AddPersonForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        person={person}
      />
      <PeopleList data={contacts} />
    </div>
  );
}


ReactDOM.render(
  <ContactManager />,
  document.getElementById('root')
);
