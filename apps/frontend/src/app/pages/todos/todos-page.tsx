import React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { Container, List, Typography } from '@disciplinatus/ui';

import { useTodos } from './todos-hooks';
import { Todo } from './todo-item';
import { TodoForm } from './todo-form';

export interface TodosPageProps extends RouteComponentProps {}

const Header = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

export const TodosPage: React.FC<TodosPageProps> = () => {
  const { data, isLoading, isError } = useTodos();

  return (
    <Container>
      <Header>
        <Typography as="h1" align="center">
          Full of energy ?
        </Typography>
        <Typography align="center">
          Don't lose the chance, create some new tasks!
        </Typography>
      </Header>
      {isLoading ? <Typography as="h3">Loading...</Typography> : null}
      {isError ? (
        <Typography as="h3">Something wrong happened...</Typography>
      ) : null}
      {isLoading ? null : (
        <>
          <List
            items={data?.response.todos ?? []}
            renderItem={(item) => <Todo todo={item} />}
            itemClassName={css`
              margin: 0.5rem 0;
            `}
          />
          <TodoForm />
        </>
      )}
    </Container>
  );
};
