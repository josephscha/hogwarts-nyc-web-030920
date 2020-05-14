import React from "react";
import { render } from "react-dom";

class HogCard extends React.Component {
    state = {
        clicked: false,
        hidden: false
    }
  onClick = () => {
      //display details on pig. Details = specialty, weight & highest medal achieved
    this.setState({clicked: !this.state.clicked})
  }

  hidePiggy = () => {
      this.setState({hidden: !this.state.hidden})
  }

  render() {
    let pigImage = require("../hog-imgs/"+this.props.name.toLowerCase().split(" ").join("_")+".jpg");
    return (
        (this.state.hidden === false) ? 
      <div>
        <h1>{this.props.name}</h1>
        <img onClick={this.onClick} src={pigImage} />
        {this.state.clicked === true ? 
        <ul>
            <li>Speciality: {this.props.specialty}</li>
            <li>Weight: {this.props.weight}</li>
            <li>Is it greased: {this.props.greased ? "Yes" : "No"}</li>
            <li>Highest Medal Achieved: {this.props['highest medal achieved']}</li>
        </ul>
        : null }
        <button onClick={this.hidePiggy}>Hide Pig</button>
      </div> : null 
    );
  }
}

export default HogCard;
