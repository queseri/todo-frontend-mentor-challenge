import React from 'react'
import Cross from '../images/icon-cross.svg'

function Todo(props) {
    return (
        <li className='todo'>
            <div className='todo-container'>
                <input id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}

                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
                <button className="delete-btn" onClick={() => props.deleteTask(props.id)}>
                    <img src={Cross} alt="" />
                    <span className="sr-only">Delete a task</span>
                </button>

            </div>
        </li>
    )
}

export default Todo