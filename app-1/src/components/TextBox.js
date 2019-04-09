import React, { Component } from 'react';

class TextBox extends Component {
 constructor(){
     super()

     this.state ={
         message: ''
     }
 }
handleChange(val){
    this.setState({
        message: val
    })
}


 
 render(){
     return(
         <div>
            <input onChange={ (e) => this.handleChange(e.target.value) }/>
            <h1>{this.state.message}</h1>
         </div>
     )
 }
}
export default TextBox;