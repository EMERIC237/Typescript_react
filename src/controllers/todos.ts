import { RequestHandler } from "express";
import { Todo } from "../models/todo";
const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const { text } = req.body as { text: string };
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({
    message: "Created the todo.",
    createTodo: newTodo,
  });
};

//GET
export const listTodo: RequestHandler = (req, res, next) => {
  res.status(200).json({
    message: "Todo list",
    todoList: TODOS,
  });
};

//update
export const updateTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params as { id: string };
  const { text } = req.body as { text: string };
  const toUpdateIndex = TODOS.findIndex((todo) => todo.id === id);
  if (toUpdateIndex < 0) {
    throw new Error("could not find Todo!");
  }
  TODOS.splice(toUpdateIndex, 1, new Todo(id, text));
  res.status(200).json({
    message: "Todo list updated",
    updatedTodos: TODOS,
  });
};

//delete
export const deleteTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params as { id: string };
  const toUpdateIndex = TODOS.findIndex((todo) => todo.id === id);
  if (toUpdateIndex < 0) {
    throw new Error("could not find Todo!");
  }
  TODOS.splice(toUpdateIndex, 1);
  res.status(200).json({
    message: "Todo list updated",
    updatedTodos: TODOS[toUpdateIndex],
  });
};
