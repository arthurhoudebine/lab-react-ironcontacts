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

  sortNameContactHandler = () => {
    const sortedContactsCopy = [...this.state.displayedContacts];
    sortedContactsCopy.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
       })

    this.setState({
        displayedContacts: sortedContactsCopy,
    })
  }

  sortPopularityContactHandler = () => {
    const sortedContactsPopCopy = [...this.state.displayedContacts];
    sortedContactsPopCopy.sort(function(a, b){
      if(a.popularity < b.popularity) { return 1; }
      if(a.popularity > b.popularity) { return -1; }
      return 0;
       })

    this.setState({
        displayedContacts: sortedContactsPopCopy,
    })
  }
  

  render() {
    return (
      <div>
        <button onClick= {this.addContactHandler} >Add Random Contact</button>
        <button onClick= {this.sortNameContactHandler} >Sort by name</button>
        <button onClick= {this.sortPopularityContactHandler} >Sort by popularity</button>


      <div className="App">
        <ArtistTable contacts={this.state.displayedContacts}/>
      </div>
      </div>  
    );
  }
}

export default App;
