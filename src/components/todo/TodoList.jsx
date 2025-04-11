"use client";

import Icon from '@mdi/react';
import { mdiCheck, mdiClose } from '@mdi/js';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

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
                                        todo.completed ? '' :
                                        
                                        <IconButton
                                            aria-label="check"
                                            color='success'
                                            onClick={() => { markAsCompletedHandler(todo.id) }}
                                        >
                                            <CheckIcon/>
                                        </IconButton>
                            
                                    }
                                    {
                                        todo.completed ? '' :

                                            <IconButton
                                             aria-label="delete" 
                                             color='error'
                                             onClick={() => { deleteTodoHandler(todo.id) }}
                                             >
                                                <DeleteIcon />
                                            </IconButton>

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