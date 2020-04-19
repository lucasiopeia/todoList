import React, { Component } from "react";
import "./App.css";
import IncompletedBox from "./Incompleted/IncompletedBox";
import CompletedBox from "./Completed/CompletedBox";
import TodoListDialog from "./Modal/TodoListDialog";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { txtValue: "", item: [], completeItem: [] };
    this.handleAddTask = this.handleAddTask.bind(this);
    this.isChangedName = this.isChangedName.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //nhan state tu component addtask
  handleAddTask = () => {
    this.addTask(this.state.name);
  };
  //get value tu input type -> state name
  isChangedName = (e) => {
    this.setState({
      ...this.state,
      txtValue: e.target.value,
    });
  };

  addTask = (name) => {
    const item = this.state.item.concat(this.state.txtValue);
    this.setState({
      ...this.state,
      item: item,
    });

  };

  deleteTask = (name) => {
    const filteredTask = this.state.item.filter(task =>
      task !== name
    )
    this.setState({
      item: filteredTask
    })
  }

  handleDelete = (event) => {
    this.deleteTask(event.target.value)
  }

  handleChange = (event) => {
    console.log("abc");
    if (event.target.checked === true) {
      const found = this.state.item.find(task =>
        task === event.target.name
      )
      this.setState({
        completeItem: this.state.completeItem.concat(found)
      })
      this.deleteTask(event.target.name)
      console.log(this.state.completeItem);
    }
  }


  render() {
    return (
      <div className="container-all">
        <div className="sida">
          <TodoListDialog
            isChangedName={this.isChangedName}
            handleAddTask={this.handleAddTask}
            addTask={this.addTask}

          />
        </div>

        <div className="row" id="center">
          <div className="col-sm-5" id="incompleted">

            <IncompletedBox name={this.state.item} deleteTask={this.handleDelete} onCheck={this.handleChange} />
          </div>

          <div className="col-sm-5" id="completed">

            <CompletedBox name={this.state.completeItem}  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
