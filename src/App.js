import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  // contructor
  constructor() { 
    super();
    this.state = {
      monsters: [],
      serachField:''
    };

  }

// a class method (arrow function)
handleChange=(e)=>{
  this.setState({serachField:e.target.value})
}

//fetch data from a website
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (users => this.setState({monsters:users}));
}

  render(){
    const {monsters , serachField }=this.state;
    const filteredMonsters=monsters.filter(monster =>
    monster.name.toLowerCase().includes(serachField.toLowerCase()));
    return (
      <div className="App">
      <h1>Monster Rodolex</h1>
      <SearchBox placeholder='Search Monsters' 
      handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />  
      </div>
    );
  }

}

export default App;
