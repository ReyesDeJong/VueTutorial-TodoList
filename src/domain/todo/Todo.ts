import { TodoData } from "./Todo.types";
export class Todo implements TodoData {
  title: string;
  content: string;
  completed: boolean;
  constructor(data: TodoData) {
    this.title = data.title;
    this.content = data.content;
    this.completed = data.completed;
  }

  changeComplete() {
    this.completed = !this.completed
  }
}