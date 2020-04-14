import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncompletedBox from './Incompleted/IncompletedBox'
import Completed from './Completed/CompletedBox'
import TodoListDialog from './Modal/TodoListDialog'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const App = () => {
  return (
    <div className="container">

      <div className="container-all">
        <h1>CRUD App with Hooks</h1>
          <TodoListDialog/>
          <br>
          </br>
        <div className="incompleted">
          <h2>Add user</h2>
          <IncompletedBox />
        </div>

        <div className="completed">
          <h2>View users</h2>
          <Completed />
        </div>

      </div>
    </div>
  )
}

export default App;

