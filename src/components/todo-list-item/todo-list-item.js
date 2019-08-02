import React  from 'react';
import './todo-list-item.css';

const TodoListItem = ({ important, done, label, onToggleImportant, onToggleDone, onDeleted }) => {

        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done'
        };
        if(important) {
            classNames += ' important'
        }
        
        return (
        <span className={ classNames }>
            <span className="todo-list-item-label" onClick={ onToggleDone }>
                {label}
            </span>
            <span>
                <button type="button" className="btn btn-outline-danger btn-sm mr-2" 
                onClick={ onDeleted }>
                    <i className="fa fa-trash-o"></i>
                </button>
                <button type="button" className="btn btn-outline-success btn-sm" 
                onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation px-1"></i>
                </button>
            </span>
        </span>
    );
}

export default TodoListItem;