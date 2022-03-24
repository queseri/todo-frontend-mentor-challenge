import React, { useState } from 'react'
import { nanoid } from "nanoid";
import FilterButton from './FilterButton';
import Todo from './Todo'
import Form from './Form';

function Main(props) {

    const [tasks, setTasks] = useState(props.tasks)

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                return { ...task, completed: !task.completed }
            }
            return task;
        })
        setTasks(updatedTasks)
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    const taskList = tasks.map(task => <Todo
        name={task.name}
        id={task.id}
        key={task.id}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask} />);

    function addTask(name) {
        const newTask = {
            id: "todo-" + nanoid(), name: name, completed: false,
            key: "todo-" + nanoid()
        };
        setTasks([...tasks, newTask]);
    }

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingTitle = `${taskList.length} ${tasksNoun} left`

    return (
        <div className='main'>
            <Form addTask={addTask} />
            <ul className='todo-list'>
                {taskList}
            </ul>

            <div className='summary'>
                <h2 className='completed'>{headingTitle}</h2>
                <p className="items-cleared">Clear completed</p>
            </div>

            <div className="filters btn-group stack-exception">
                <FilterButton currentState="All" pressed="true" />
                <FilterButton currentState="Active" pressed="false" />
                <FilterButton currentState="Completed" pressed="false" />
            </div>
        </div>
    )
}

export default Main