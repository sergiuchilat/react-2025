import Icon from '@mdi/react';
import { mdiCheck, mdiClose } from '@mdi/js';

export default function TodoList() {

    const todoList = [
        {
            id: 1,
            text: 'Sa nu uit sa maninc',
            completed: true,
            color: 'green'
        },
        {
            id: 2,
            text: 'Sa nu fac temele de acasa la web I',
            completed: true,
            color: 'green'
        },
        {
            id: 3,
            text: 'Sa nu uit sa ma duc la sala',
            completed: false,
            color: 'red'
        }
    ]

    return (
        <ul className="todo-list">
            {todoList.map(todo => {
                return (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <div>
                            {todo.completed ? <Icon path={mdiCheck} size={1} color={todo.color} /> : ''}
                            {!todo.completed ? <Icon path={mdiClose} size={1} color={todo.color} /> : ''}
                        </div>
                        
                        <span>{todo.text}</span>
                        <div>
                            <button>Mark as completed</button>
                            <button>Delete</button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}