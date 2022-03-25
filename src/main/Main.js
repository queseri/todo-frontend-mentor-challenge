import React, { useState } from 'react'
import { nanoid } from "nanoid";
import FilterButton from './FilterButton';
import Todo from './Todo'
import Form from './Form';

function Main(props) {
    console.log(props)
    const [tasks, setTasks] = useState(props.tasks)
    const [filter, setFilter] = useState('All');

    const FILTER_MAP = {
        All: () => true,
        Active: task => !task.completed,
        Completed: task => task.completed
    };

    const FILTER_NAMES = Object.keys(FILTER_MAP);
    console.log(FILTER_NAMES)

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

    function editTask(id, newName) {
        const editedTasksList = tasks.map(task => {
            if (id === task.id) {
                return { ...task, name: newName }
            }
            return (task)
        })
        setTasks(editedTasksList)
    }

    const taskList = tasks
        .filter(FILTER_MAP[filter])
        .map(task => (
            <Todo
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ));

    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));


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
                <div className='filters-container'>
                    {filterList}
                </div>
                <p className='items-cleared'>Clear completed</p>
            </div>



        </div>
    )
}

export default Main