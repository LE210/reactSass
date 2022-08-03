import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import {useTodoState} from "./TodoContext";

const TodoListBlock = styled.div`
    // flex: 1; 자신의 영역을 꽉채우도록 설정
    flex: 1; 
    padding-top: 20px;
    padding-left: 32px;
    padding-bottom: 48px;
    padding-right: 32px;
    overflow-y: auto;
`;

function TodoList() {
    const todos = useTodoState();
    return (
        <TodoListBlock>
            {todos.map(todo =>
            <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
            />
            )}
        </TodoListBlock>
    );
}

export default TodoList;