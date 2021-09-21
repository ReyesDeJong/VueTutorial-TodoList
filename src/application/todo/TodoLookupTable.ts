import { TodoData, TodoRepository } from "@/domain/todo/Todo.types";
import { Todo } from "@/domain/todo/Todo";

export class TodoLookupTable implements TodoRepository {
  createTodo(title: string, content: string, completed: boolean): TodoData {
    const todo = new Todo({ title, content, completed });
    return {
      title: todo.title,
      content: todo.content,
      completed: todo.completed,
    };
  }
}
