import React, { Component } from 'react'
import "./ToDoList.css";


export default class ToDoList extends Component {

    render() {
        return (
            <div className="to-do-list-main">
                <ul>
                    <li>
                        <input type="checkbox"></input>        {this.props.name} 
                    </li>

                </ul>
            </div>

        )
    }
}
