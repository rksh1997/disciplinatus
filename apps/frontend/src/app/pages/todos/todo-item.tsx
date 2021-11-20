import React from 'react';
import { css } from '@emotion/css';

import { ITodoSchema } from '@disciplinatus/core';
import { Button, Flex, Icon, Typography } from '@disciplinatus/ui';
import { useCompleteTodo, useDeleteTodo } from './todos-hooks';

export interface TodoProps {
  todo: ITodoSchema;
}

const buttonClassName = css`
  margin: 0 0.25rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { mutate: completeTodo, isLoading: isCompletingTodo } =
    useCompleteTodo();
  const { mutate: deleteTodo, isLoading: isDeletingTodo } = useDeleteTodo();
  const isLoading = isCompletingTodo || isDeletingTodo;

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <div>
        <Typography
          as="h3"
          decoration={todo.completed ? 'line-through' : undefined}
        >
          {todo.title}
        </Typography>
      </div>
      <div>
        {!todo.completed ? (
          <Button
            className={buttonClassName}
            onClick={() => completeTodo({ id: todo._id })}
            disabled={isLoading}
          >
            <Icon icon={['far', 'check-circle']} />
          </Button>
        ) : null}
        <Button
          color="danger"
          className={buttonClassName}
          onClick={() => deleteTodo({ id: todo._id })}
          disabled={isLoading}
        >
          <Icon icon={['far', 'times-circle']} />
        </Button>
      </div>
    </Flex>
  );
};
