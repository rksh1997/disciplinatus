import axios from 'axios';

import { ICreateTodoDTO } from '@disciplinatus/core';

import { API_URL } from '../constants';

export class TodoService {
  static async getTodos() {
    const { data } = await axios.get(`${API_URL}/todos`);
    return data;
  }

  static async createTodo(dto: ICreateTodoDTO) {
    const { data } = await axios.post(`${API_URL}/todos`, dto);
    return data;
  }

  static async completeTodo(id: string) {
    const { data } = await axios.put(`${API_URL}/todos/${id}/complete`);
    return data;
  }

  static async deleteTodo(id: string) {
    const { data } = await axios.delete(`${API_URL}/todos/${id}`);
    return data;
  }
}
