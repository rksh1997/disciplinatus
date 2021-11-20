import { Collection, Db, ObjectId } from 'mongodb';
import { FactoryProvider } from '@nestjs/common';

import {
  ICreateTodoDTO,
  IUpdateTodoDTO,
  ITodoSchema,
} from '@disciplinatus/core';

import { DI_KEYS } from '../di';
import { ITodoRepository } from './interfaces/todo.repository.interface';

export class MongoTodoRepository implements ITodoRepository {
  private collection: Collection<ITodoSchema>;

  constructor(db: Db) {
    this.collection = db.collection<ITodoSchema>('Todo');
  }

  async createTodo(data: ICreateTodoDTO): Promise<ITodoSchema> {
    const id = new ObjectId();
    const { insertedId } = await this.collection.insertOne({
      _id: id.toString(),
      ...data,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.collection.findOne({ _id: insertedId });
  }

  getTodos(): Promise<ITodoSchema[]> {
    return this.collection
      .find(
        {},
        {
          sort: {
            completed: 1,
            createdAt: 1,
          },
        }
      )
      .toArray();
  }

  async updateTodo(id: string, data: IUpdateTodoDTO): Promise<ITodoSchema> {
    await this.collection.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          ...data,
          updatedAt: new Date(),
        },
      }
    );

    return this.collection.findOne({ _id: id });
  }

  async deleteTodo(id: string): Promise<boolean> {
    const { deletedCount } = await this.collection.deleteOne({
      _id: id,
    });

    return deletedCount > 0;
  }
}

export const TodoRepositoryProvider: FactoryProvider = {
  provide: DI_KEYS.TODO_REPOSITORY,
  useFactory: (db: Db) => new MongoTodoRepository(db),
  inject: [DI_KEYS.DB_CONNECTION],
};
