import React, { Component } from 'react';
import './App.css';
import RenderImage from './component/RenderImage'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <RenderImage renderImage={'https://i1.wp.com/montanaseniornews.com/wp-content/uploads/2016/10/LarrySeekinsPickleball331.jpg?resize=715%2C318&ssl=1'} />
      </div>
    );
  }
  
}

export default App;
