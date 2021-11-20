import React from 'react';
import { RouteComponentProps } from 'react-router';

import { useTodos } from './todo-hooks';

export interface TodosPageProps extends RouteComponentProps {}

export const TodosPage: React.FC<TodosPageProps> = () => {
  const { data, isLoading, isError } = useTodos();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <h1>
      {data?.response.todos.map((todo) => (
        <p key={todo._id}>{todo.title}</p>
      ))}
    </h1>
  );
};
