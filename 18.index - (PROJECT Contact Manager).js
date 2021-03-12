import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class ContactManager extends Component {
  state = {
    contacts: [],
    newName: ""
  }

  handleNewContact = (e) => {
    this.setState({ newName: e.target.value })
  }

  handleSubmit = (e) => {
    this.setState({ contacts: [...this.state.contacts, this.state.newName] })
    this.setState({ newName: "" })
    e.preventDefault();
  }
  render() {
    return (<div className="App-header">
      <Header />
      <AddContact
        NewName={this.state.newName}
        onAdd={this.handleNewContact}
        onSubmit={this.handleSubmit}
      />
      <Contacts contacts={this.state.contacts} />
    </div>
    );
  }
}
class Header extends Component {

  render() {
    return (<div><h1>Contact Manager</h1></div>);
  }
}
class AddContact extends Component {

  render() {
    return (<form onSubmit={this.props.onSubmit}>

      <input type="text" value={this.props.NewName} onChange={this.props.onAdd} />

      <input type="submit" value="Add" />

    </form>

    );
  }
}
class Contacts extends Component {

  render() {
    let contacts = this.props.contacts
    let contactItems = contacts.map((contact, index) => <div className="contact" key={index}><p className="contact" >{contact}</p></div>)
    return (<div>{contactItems}</div>);
  }
}

ReactDOM.render(
  <ContactManager />, document.getElementById('root')
);
