import React, { Component } from 'react'

export default class TodoList extends Component {

    render() {
        return (
            <div className="to-do-list-main">
                <tr>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>{this.props.name}</td>
                </tr>
                {/* <ul>
                    <li>
                        <input type="checkbox"></input>
                        {this.props.name}
                    </li>
                </ul> */}
            </div>

        )
    }
}
