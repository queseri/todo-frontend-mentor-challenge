import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { nanoid } from "nanoid";
import FilterButton from './FilterButton';
import Todo from './Todo'
import Form from './Form';

function Main(props) {
    // console.log(props)
    const [tasks, setTasks] = useState(props.tasks)
    const [filter, setFilter] = useState('All')

    const FILTER_MAP = {
        All: () => true,
        Active: task => !task.completed,
        Completed: task => task.completed
    };

    const FILTER_NAMES = Object.keys(FILTER_MAP);
    //  console.log(FILTER_NAMES)

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

    function resetTask() {
        const allTodos = Array.from(document.querySelectorAll(".todo-item"))
        const updatedTasks = tasks.map((task) => {
            return { ...task, completed: false }
        })
        console.log(tasks)
        allTodos.forEach(todo => todo.checked = false)
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
        .map((task, idx) => (
            <Todo
                key={task.id}
                id={task.id}
                index={idx}
                name={task.name}
                completed={task.completed}
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

    function handleOnDragEnd(result) {
        if (!result.destination) return
        const items = Array.from(tasks)      
        const [reorderedItems] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItems)       
        setTasks(items)
    }

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task'
    const headingTitle = `${taskList.length} ${tasksNoun} left`

    return (
        <div className='main'>
            <Form addTask={addTask} />
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='tasks'>
                    {(provided) => (
                        <ul className='todo-list'
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                            {taskList}
                            {provided.placeholder}
                        </ul>

                    )}

                </Droppable>
            </DragDropContext>

            <div className='summary'>
                <p className='completed'>{headingTitle}</p>
                <div className='filters-container'>
                    {filterList}
                </div>
                <button className='clear-items-btn' onClick={resetTask}>Clear completed</button>
            </div>

        </div>
    )
}

export default Main