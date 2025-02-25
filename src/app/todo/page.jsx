import NavBar from "@/components/layout/NavBar";
import TodoAdd from '@/components/todo/TodoAdd';
import TodoList from '@/components/todo/TodoList';

export default function TodoPage() {
    const todoList = [
        {
            id: 1,
            text: 'Sa nu uit sa maninc',
            completed: false,
            color: 'red'
        },
        {
            id: 2,
            text: 'Sa nu fac temele de acasa la web I',
            completed: false,
            color: 'red'
        },
        {
            id: 3,
            text: 'Sa nu uit sa ma duc la sala',
            completed: true,
            color: 'green'
        }
    ]


    return (
        <>
            <NavBar />

            <TodoAdd />
            <TodoList todoList={todoList} canEdit={true} />
        </>
    );

}