import { ICreateTodoDTO, IUpdateTodoDTO } from '@disciplinatus/core';

import { ITodoSchema } from './todo.schema';

export interface ITodoRepository {
  createTodo(data: ICreateTodoDTO): Promise<ITodoSchema>;
  getTodos(): Promise<ITodoSchema[]>;
  updateTodo(id: string, data: IUpdateTodoDTO): Promise<ITodoSchema>;
  deleteTodo(id: string): Promise<boolean>;
}
