import { TodoData } from "@/domain/todo/Todo.types";
import { Callbacks, UseCaseInteractor } from "../shared/UseCase.types";
import { TodoLookupTable } from "./TodoLookupTable";

export class CreateTodo implements UseCaseInteractor {
  constructor(private todoService: TodoLookupTable) {}

  execute(callbacks: Callbacks, params: TodoData): void {
    try {
      const todoData = this.todoService.createTodo(
        params.title,
        params.content,
        params.completed
      );
      callbacks.onSucess(todoData);
    } catch {
      callbacks.onFailure;
    }
  }
}