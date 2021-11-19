import { Module } from '@nestjs/common';

import { TodoController } from './todo.controller';
import { TodoRepositoryProvider } from './todo.repository';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoRepositoryProvider, TodoService],
})
export class TodoModule {}
