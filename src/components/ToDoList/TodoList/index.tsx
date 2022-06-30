import React from 'react';

import TodoItem from '@/components/ToDoList/TodoItem';

import { Todo } from '@/components/ToDoList/types/todo.type';

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onRemove }: Props) => {
  return (
    <ul data-testid="TodoList">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default TodoList;
