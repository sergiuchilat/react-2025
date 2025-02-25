import NavBar from "@/components/layout/NavBar";
import TodoAdd from '@/components/todo/TodoAdd';
import TodoList from '@/components/todo/TodoList';

export default function TodoPage(){
    return (
        <>
            <NavBar/>
            
            <TodoAdd />
            <TodoList />
        </>
    );

}