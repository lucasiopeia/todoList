import React, { Component } from "react";
import "./IncompletedBox.css";
import ToDoList from "../TodoList/ToDoList";
import Button from "react-bootstrap/Button";

//Xu ly cac Task
class IncompletedBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  handleDelete = () => {
    this.props.deleteTask(this.props.name)
  }


  render() {
    return (
      <div className="incompletedLayout">
        <h4>To do List:</h4>
        <div>
          {this.props.name.map((item, index) => {
            return <>
              <ToDoList name={item} />
              <Button type="button" className="btn btn-outline-primary" onClick={this.props.deleteTask} value={item}><i className="btn btn-primary"></i>Delete</Button>
            </>;
          })}

        </div>


      </div>
    );
  }
}

export default IncompletedBox;
