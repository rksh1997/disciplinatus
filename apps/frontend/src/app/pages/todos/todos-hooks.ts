import { useQuery } from 'react-query';

import { ITodoSchema } from '@disciplinatus/core';

import { TodoService } from '../../services/todo-service';
import { APIResponse } from '../../lib/common-types';

export const GET_TODOS_API_KEY = 'GET_TODOS_API_KEY';
export function useTodos() {
  return useQuery<APIResponse<{ todos: ITodoSchema[] }>>(
    [GET_TODOS_API_KEY],
    TodoService.getTodos
  );
}
