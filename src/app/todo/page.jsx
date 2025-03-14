'use client';
import NavBar from "@/components/layout/NavBar";
import TodoAdd from '@/components/todo/TodoAdd';
import TodoList from '@/components/todo/TodoList';
import { useEffect, useState } from "react";

export default function TodoPage() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setTodoList(json.map(todo => {
                    return {
                        id: todo.id,
                        text: todo.title,
                        completed: false,
                        color: 'red'
                    }
                }));
                console.log('Todo list: ', todoList);
            });
    }, []);

    const onDelete = (id) => {
        console.log('Delete todo with id: ', id);
    }

    const onComplete = (id) => {
        console.log('Mark todo as completed with id: ', id);
    }


    return (
        <>
            <NavBar />

            <TodoAdd />
            { todoList.length < 1 && <div id="loading">Loading ...</div>}
            <TodoList
                todoList={todoList}
                canEdit={true}
                onDelete={onDelete}
                onComplete={onComplete}
            />
        </>
    );

}