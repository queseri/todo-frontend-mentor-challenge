import React, { useState } from "react";
import Cross from '../images/icon-cross.svg'

function Todo(props) {
    const [isEditing, setEditing] = useState(false)
    const [newName, setNewName] = useState('')

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (newName.trim("") === "") return alert("Enter a valid todo item")
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

   

    const editingTemplate = (
        <form className="todo-container" onSubmit={handleSubmit}>
            <div className="form-group-edit">
                <label className="todo-label" htmlFor={props.id}>
                    {`New name for "${props.name}"`}
                </label>
                <input id={props.id}
                    className="todo-text"
                    type="text"
                    value={newName}
                    onChange={handleChange} />
            </div>
            <div className="container-group-edit">
                <button type="button" className="btn todo-edit-cancel" onClick={() => setEditing(false)}>
                    Cancel
                    <span className="sr-only">renaming {props.name}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit-save">
                    Save
                    <span className="sr-only">new name for {props.name}</span>
                </button>
            </div>
        </form>
    );

    const viewTemplate = (
        <div className='todo-container'>
            <input id={props.id}
                type="checkbox"
                className="todo-item"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)} />

            <label className={`todo-label ${props.completed ? 'line-through' : ""}`}
                htmlFor={props.id} >
                {props.name}
            </label>

            <button className="btn-edit"
                onClick={() => setEditing(true)}>Edit</button>

            <button className="delete-btn"
                onClick={() => props.deleteTask(props.id)}>
                <img src={Cross} alt="" />
                <span className="sr-only">Delete a task</span>
            </button>

        </div>

    )

    return (
        <li className='todo'>
            {isEditing ? editingTemplate : viewTemplate}
        </li>
    )
}

export default Todo