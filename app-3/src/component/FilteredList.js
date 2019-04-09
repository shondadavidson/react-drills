import React, {Component} from 'react'

class FilteredList extends Component {
    constructor() {
      super();
  
      this.state = {
        filterString: "",
        foods: [
          "spaghetti",
          "ice cream",
          "sushi",
          "bologna",
          "cheese"
        ]
      }
    }
 handleFilteredList(val){
   this.setState=({
     filteredString: val
   })
 }
   
  
    render() {
      let filteredList = this.state.foods.filter
  
      return (
        <div className="App">
          
          
        </div>
      );
    }
  }
export default FilteredList;