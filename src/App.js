import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // life cycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {this.setState({ monsters: users })})
  }

  // lexical scoping that sets the scope (range of functionality) of a variable 
  // so that it may only be called (referenced) from within the block of code in which it is defined.
  hanldeChange = e => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) 
    );
    
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>  
        <SearchBox
          placeholder ='search monsters' 
          hanldeChange = { this.hanldeChange }
        />
        <CardList monsters={ filteredMonsters } />               
      </div>
    );
  }
}

export default App;
