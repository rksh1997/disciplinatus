import {
  ICreateTodoDTO,
  ITodoSchema,
  IUpdateTodoDTO,
} from '@disciplinatus/core';

export interface ITodoRepository {
  createTodo(data: ICreateTodoDTO): Promise<ITodoSchema>;
  getTodos(): Promise<ITodoSchema[]>;
  updateTodo(id: string, data: IUpdateTodoDTO): Promise<ITodoSchema>;
  deleteTodo(id: string): Promise<boolean>;
}
