import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()
        
        this.state = {
            username: '',
            password: ''
        }
    
    this.handleUpdateUsername = this.handleUpdateUsername.bind(this)
    this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
    }
handleUpdateUsername(e){
    this.setState( {username: e.target.value})

}
handleUpdatePassword(e){
    this.setState( {password: e.target.value} )
}

handleUserInput(){
    alert(`user name is ${this.state.username} password is ${this.state.password}`)
}

    render(){
        return(
            <div>
                <span>User Name</span>
                <input onChange={ this.handleUpdateUsername }></input>
                <span> Password</span>
                <input onChange={ this.handleUpdatePassword}></ input>
                
                <button onClick={this.handleUserInput}>Submit</button>
            </div>
        )
    }
}

export default Login