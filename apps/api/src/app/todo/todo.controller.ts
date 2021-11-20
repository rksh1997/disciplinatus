import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
  UsePipes,
} from '@nestjs/common';

import {
  createTodoValidationSchema,
  ICreateTodoDTO,
} from '@disciplinatus/core';

import { TodoService } from './todo.service';
import { JoiValidationPipe } from '../lib/pipes/validation-pipe';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createTodoValidationSchema))
  public async postTodos(@Body() data: ICreateTodoDTO, @Res() res) {
    const todo = await this.todoService.createTodo(data.title);

    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      response: {
        todo,
      },
    });
  }

  @Get()
  public async getTodos() {
    const todos = await this.todoService.listTodos();

    return {
      statusCode: HttpStatus.OK,
      response: {
        todos,
      },
    };
  }

  @Put(':id/complete')
  public async completeTodo(@Param('id') id: string, @Res() res) {
    const updatedTodo = await this.todoService.completeTodo(id);

    if (!updatedTodo) {
      throw new NotFoundException(`Todo of ID: "${id}" does not exist`);
    }

    return res.status(HttpStatus.ACCEPTED).json({
      statusCode: HttpStatus.ACCEPTED,
      reponse: {
        todo: updatedTodo,
      },
    });
  }

  @Delete(':id')
  public async deleteTodo(@Param('id') id: string, @Res() res) {
    const deleted = await this.todoService.deleteTodo(id);
    return res.status(HttpStatus.ACCEPTED).json({
      statusCode: HttpStatus.ACCEPTED,
      response: {
        deleted,
      },
    });
  }
}
