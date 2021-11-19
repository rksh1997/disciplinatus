export interface ICreateTodoDTO {
  title: string;
}

export interface IUpdateTodoDTO {
  title?: string;
  completed?: boolean;
}
