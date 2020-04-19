import React, { Component } from 'react'
import "./ToDoList.css";
import Button from "react-bootstrap/Button";

export default class ToDoList extends Component {

    render() {
        return (
            <div className="to-do-list-main">
                <ul>
                    <li>
                        <input type="checkbox" name={this.props.name} onChange={this.props.onCheck} ></input>
                        {this.props.name}
                        <Button type="button" className="btn btn-outline-primary" onClick={this.props.deleteTask} value={this.props.name}><i className="btn btn-primary"></i>Delete</Button>
                    </li>
                    
                </ul>
            </div>

        )
    }
}
