import React, { useState } from 'react';
import styled from '@emotion/styled';

import {
  createTodoValidationSchema,
  ICreateTodoDTO,
} from '@disciplinatus/core';
import { Typography } from '@disciplinatus/ui';

import { useCreateTodo } from './todos-hooks';

export interface TodoFormProps {}

const Input = styled.input`
  width: 100%;
  padding: 1rem 0;
  font-size: large;
  border: none;
  box-shadow: 0px 1px 1px 0px #ddd;
  outline: none;
`;

export const TodoForm: React.FC<TodoFormProps> = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const { mutateAsync: createTodo, isLoading } = useCreateTodo();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const dto: ICreateTodoDTO = { title };
      const { error } = createTodoValidationSchema.validate(dto);
      if (error) {
        return setError(error.message);
      }

      await createTodo(dto);
      setTitle('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        value={title}
        onChange={handleInputChange}
        placeholder="e.g Water the garden"
        disabled={isLoading}
      />
      {error ? <Typography>{error}</Typography> : null}
    </form>
  );
};
