import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            list: []
            userInput: ''
        }
    }
HandleChange( value ){
    this.setState{ input: value}
}

this.handleTask = () => {
    this.setState({
        list: [...this.state.list, this.state.userInput]
        input: ''
    })
}
    render(
        let list = this.state.list.map( (element, index) => {
            return (
                <ToDoList key={ index } task={ element } />
        }

        )
        return(
            <div className="App">
                <div>
                <h2>what would you like to add to your to-do list?</h2>
                <input onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button onClick={this.handleAddTask}>Submit</button>
            
                </div> 
                <br />   
            </div>
        )
    )
}