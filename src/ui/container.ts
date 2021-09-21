import { CreateTodo } from "@/application/todo/CreateTodo";
import { TodoLookupTable } from "@/application/todo/TodoLookupTable";

const lookupTable = new TodoLookupTable();
export const createTodo = new CreateTodo(lookupTable);
