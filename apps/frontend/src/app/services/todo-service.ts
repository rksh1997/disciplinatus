import axios from 'axios';

import { API_URL } from '../constants';

export class TodoService {
  static async getTodos() {
    const { data } = await axios.get(`${API_URL}/todos`);
    return data;
  }
}
