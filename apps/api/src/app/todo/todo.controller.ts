import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';

import { ICreateTodoDTO } from '@disciplinatus/core';

import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
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
      return res.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        error: {
          message: `Todo of ID "${id}" is not found`,
        },
      });
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
