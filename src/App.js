import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Kenneth', age: 28 },
      { name: 'Windy', age: 27 },
      { name: 'CarriAnna', age: 27 }
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Windy', age: 27 },
        { name: 'CarriAnna', age: 27 }
      ]
    })
  } 
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Kenneth', age: 28 },
        { name: event.target.value, age: 27 },
        { name: 'CarriAnna', age: 27 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Kenneth J. Nicholas')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Kenneth!')} 
          changed={this.nameChangedHandler}>My Hobbies: Going to Music Festivals</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  };

}

export default App;
