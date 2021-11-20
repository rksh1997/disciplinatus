import { useMutation, useQuery, useQueryClient } from 'react-query';

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

export function useCompleteTodo() {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, { id: string }>(
    (data) => TodoService.completeTodo(data.id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([GET_TODOS_API_KEY]);
      },
    }
  );
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, { id: string }>(
    (data) => TodoService.deleteTodo(data.id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([GET_TODOS_API_KEY]);
      },
    }
  );
}
