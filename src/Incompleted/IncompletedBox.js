import React, { Component } from "react";
import "./IncompletedBox.css";
import ToDoList from "../TodoList/ToDoList";


//Xu ly cac Task
class IncompletedBox extends Component {

  render() {
    return (
      <div className="incompletedLayout">
        <h4>To do List:</h4>
        <div>
          {this.props.name.map((item, index) => {
            return <>
              <ToDoList name={item} deleteTask={this.props.deleteTask} onCheck={this.props.onCheck} />
              
            </>;
          })}

        </div>


      </div>
    );
  }
}

export default IncompletedBox;
