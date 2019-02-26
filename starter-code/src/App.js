import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ArtistTable from './Components/ArtistTable'



class App extends Component {

  state= {
    displayedContacts : contacts.slice(0,5)
  }

  addContactHandler = () => {
    const randomContact = contacts[Math.floor(Math.random()*contacts.length-1)];
    // console.log(randomContact);
    
    const displayedContactsCopy = [...this.state.displayedContacts];
    displayedContactsCopy.push(randomContact);

    this.setState({
        displayedContacts: displayedContactsCopy,
    })
  }
  

  render() {
    return (
      <div>
        <button onClick= {this.addContactHandler} >Add Random Contact</button>
      <div className="App">
        <ArtistTable contacts={this.state.displayedContacts}/>
      </div>
      </div>  
    );
  }
}

export default App;
