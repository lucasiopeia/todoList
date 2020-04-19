import React, { Component } from "react";
import "./CompletedBox.css";
import CompleteList from "../TodoList/CompleteList";

class CompletedBox extends Component {

  render() {
    return (
      <div className="completedLayout">
        <h4>Complete List</h4>
        <div>
          {this.props.name.map((completeItem, index) => {
            return <>
              <CompleteList name={completeItem}  onClick={this.props.onClick}/>

            </>;
          })}
        </div>
      </div>
    );
  }
}

export default CompletedBox
