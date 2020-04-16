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
    this.state = { txtValue: "", item: [] };
    this.handleAddTask = this.handleAddTask.bind(this);
    this.isChangedName = this.isChangedName.bind(this);
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
    this.forceUpdate();
  };

  render() {
    return (
      <div className="card card-body my-2">
        <div className="sida">
          <TodoListDialog
            isChangedName={this.isChangedName}
            handleAddTask={this.handleAddTask}
            addTask={this.addTask}
          />
        </div>

        <div className="container-all">
          <div className="incompleted">
            

            <IncompletedBox name={this.state.item} />
          </div>

          <div className="completed">
            
            <CompletedBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
