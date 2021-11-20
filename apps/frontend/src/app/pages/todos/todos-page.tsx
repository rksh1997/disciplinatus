import React from 'react';
import { RouteComponentProps } from 'react-router';
import { css } from '@emotion/css';

import { Container, List } from '@disciplinatus/ui';

import { useTodos } from './todos-hooks';
import { Todo } from './todo-item';

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
    <Container>
      <List
        items={data?.response.todos ?? []}
        renderItem={(item) => <Todo todo={item} />}
        itemClassName={css`
          margin: 0.5rem 0;
        `}
      />
    </Container>
  );
};
