import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogsList: hogs,
      // filterBy: 'all'
    }
  }

  // getHogs = () => {
  //   this.setState({
  //     hogsList: hogs
  //   })
  // }
  showAll = () => {
    this.setState({hogsList: hogs})
  }

  filterByGreased = () => {
    let greasedPigs = this.state.hogsList.filter(hog => hog.greased === true)
    this.setState({ hogsList: greasedPigs})
  }

  sortByName = () => {
    let pigsByName = this.state.hogsList.sort((a,b) => (a.name < b.name) ? -1 : 1)
    this.setState({hogsList: pigsByName})
  }

  sortByWeight = () => {
    let pigsByWeight = this.state.hogsList.sort((a,b) => (a.weight < b.weight) ? -1 : 1)
    this.setState({hogsList: pigsByWeight})
  }
  // filterByState = (value) => {
  //   this.setState({
  //     filterBy: value
  //   })
  // }

  // sortBy = (value) => {
  //   this.state.hogsList.sort((a,b) => {return (a.value - b.value)})
  // }

  render() {
    // (this.state.filterBy === 'all') ? this.showAll() : this.sortBy(this.state.filterBy)
    return (
      <div className="App">
        <Nav />
        <HogContainer filterByState={this.filterByState} 
        showAll={this.showAll} 
        filterByGreased={this.filterByGreased} 
        sortByName={this.sortByName}
        sortByWeight={this.sortByWeight}
        hogsList={this.state.hogsList} />
      </div>
    );
  }
}

export default App;
 