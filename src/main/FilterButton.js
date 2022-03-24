import React from 'react'

function FilterButton(props) {
    return (
        <button type="button" className="btn toggle-btn" aria-pressed={props.pressed}>
            <span className="sr-only">Show </span>
            <span>{props.currentState}</span>
            <span className="sr-only"> tasks</span>
        </button>
    )
}

export default FilterButton