import React, { Component } from 'react';
import './App.css';
import FilteredList from './component/FilteredList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <FilteredList />
      </div>
    );
  }
}

export default App;
