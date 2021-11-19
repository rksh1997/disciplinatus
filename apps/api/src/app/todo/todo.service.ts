import { Inject, Injectable } from '@nestjs/common';

import { DI_KEYS } from '../di';
import { ITodoRepository } from './interfaces/todo.repository.interface';

@Injectable()
export class TodoService {
  constructor(
    @Inject(DI_KEYS.TODO_REPOSITORY) private todoRepository: ITodoRepository
  ) {}

  public createTodo(title: string) {
    return this.todoRepository.createTodo({
      title,
    });
  }

  public listTodos() {
    return this.todoRepository.getTodos();
  }

  public completeTodo(id: string) {
    return this.todoRepository.updateTodo(id, {
      completed: true,
    });
  }

  public deleteTodo(id: string) {
    return this.todoRepository.deleteTodo(id);
  }
}
