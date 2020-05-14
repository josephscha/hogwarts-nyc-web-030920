import React, { Fragment } from "react";
import HogCard from './HogCard'

class HogContainer extends React.Component {

  filterByGreased = () => {
    this.props.filterByGreased()
  }

  showAll = () => {
    this.props.showAll()
  }

  // selectHandler = (event) => {
  //   this.props.filterByState(event.target.value)
  //   debugger;
  // }
  sortByName = () => {
    this.props.sortByName()
  }

  sortByWeight = () => {
    this.props.sortByWeight()
  }

  render() {
    return (
      <div>
        <h1>Welcome to HOGwarts</h1>
        <button onClick={this.showAll}>Show ALL my hogs</button>
        <button onClick={this.filterByGreased}>Filter by Greased</button>
        {/* <select onChange={this.selectHandler} id="filter-by">
          <option selected disabled>Filter By</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select> */}
        <button onClick={this.sortByName}>Filter By Name</button>
        <button onClick={this.sortByWeight}>Filter By Weight</button> 
        {this.props.hogsList.map((hog,index) => <HogCard key={index} {...hog}/>)}
      </div>
    );
  }
}

export default HogContainer;
 