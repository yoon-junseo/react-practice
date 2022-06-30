import React, { useState, useRef, useCallback } from 'react';

import TodoForm from '@/components/ToDoList/TodoForm';
import TodoList from '@/components/ToDoList/TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'TDD 배우기',
      done: true,
    },
    {
      id: 2,
      text: 'react-testing-library 사용하기',
      done: true,
    },
  ]);
  const nextId = useRef(3);

  const onInsert = useCallback((text: string) => {
    setTodos((todos) => todos.concat({ id: nextId.current, text, done: false }));
    nextId.current += 1;
  }, []);

  const onToggle = useCallback((id: number) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  }, []);

  const onRemove = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default TodoApp;
