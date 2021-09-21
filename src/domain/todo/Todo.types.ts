export interface TodoData {
  title: string;
  content: string;
  completed: boolean;
}

export interface TodoRepository {
  createTodo(title: string, content: string, completed: boolean): TodoData;
}
