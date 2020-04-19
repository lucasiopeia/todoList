import React, { Component } from 'react'
import "./ToDoList.css";
import Button from "react-bootstrap/Button";

export default class CompleteList extends Component {

    render() {
        return (
            <div className="to-do-list-main">
                <ul>
                    <li>
                        {this.props.name}
                        <Button type="button" className="btn btn-outline-primary" onClick={this.props.onClick} value={this.props.name}><i className="btn btn-primary"></i>Undo</Button>
                    </li>
                    
                </ul>
            </div>

        )
    }
}
