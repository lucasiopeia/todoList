import React, { Component } from "react";
import "./CompletedBox.css";
import ToDoList from "../TodoList/ToDoList";

class CompletedBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [

      ],
    };
  }

  render() {
    return (
      <div className="completedLayout">
        <h4>To do List:</h4>
        <div>
          {this.props.name.map((completeItem, index) => {
            return <>
              <ToDoList name={completeItem}/>

            </>;
          })}
        </div>
      </div>
    );
  }
}

export default CompletedBox
