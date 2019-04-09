import React, { Component } from 'react'

class Login extends Component {

    constructor(){
        super()

        this.state ={
            userName: '',
            password: ''
        }
    }

   handleUserName(val){
       console.log(val)
       this.setState({
           userName: val
       }
       )
   }

   handlePassword(val){
       this.setState({
           password: val
       })
   }
    
    handleLogin = () => {
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input 
                placeholder="Username"
                type="text"
                onChange={(e) => this.handleUserName(e.target.value)} />
                <input 
                placeholder="Password"
                type="text"
                onChange={(e) => this.handlePassword(e.target.value)} />
                <button onClick={this.handleLogin}>Login</button>


            </div>
        )
    }

    
}

export default Login