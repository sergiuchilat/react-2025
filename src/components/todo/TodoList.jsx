"use client";

import Icon from '@mdi/react';
import { mdiCheck, mdiClose } from '@mdi/js';

export default function TodoList({ todoList, canEdit, onDelete, onComplete }) {

    function deleteTodoHandler(id) {
        onDelete(id);
    }

    function markAsCompletedHandler(id) {
        onComplete(id);
    }

    return (
        <ul className="todo-list">
            {todoList.map(todo => {
                return (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <div className='icon'>
                            {todo.completed ? <Icon path={mdiCheck} size={1} color={todo.color} /> : ''}
                        </div>

                        <div className='text'>{todo.text}</div>
                        {
                            canEdit ? (
                                <div className='actions'>
                                    {
                                        todo.completed ? '' : <button onClick={() => {markAsCompletedHandler(todo.id)}}>
                                            <Icon path={mdiCheck} size={1} color='green' />
                                        </button>
                                    }
                                    {
                                        todo.completed ? '' : <button onClick={() => {deleteTodoHandler(todo.id)}}>
                                            <Icon path={mdiClose} size={1} color='red' />
                                        </button>
                                    }
                                </div>
                            ) : ''
                        }
                    </li>
                );
            })}
        </ul>
    );
}