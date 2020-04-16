import React, { Component } from "react";
import "./IncompletedBox.css";
import ToDoList from "../ToDoList";

//Xu ly cac Task
class IncompletedBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [

      ],
    };
  }

  render() {
    return (
      <div className="incompletedLayout">
        <table className="table table-responsive">
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th>Name of task</th>
              </tr>
            </thead>
            <tbody>
              <td>
              {this.props.name.map((item, index) => {
                return <ToDoList name={item} />;
              })}
              </td>
            </tbody>
            
          </table>
        </table>
      </div>
    );
  }
}

export default IncompletedBox;
