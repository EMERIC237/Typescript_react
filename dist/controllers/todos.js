"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.listTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const { text } = req.body;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({
        message: "Created the todo.",
        createTodo: newTodo,
    });
};
exports.createTodo = createTodo;
//GET
const listTodo = (req, res, next) => {
    res.status(200).json({
        message: "Todo list",
        todoList: TODOS,
    });
};
exports.listTodo = listTodo;
//update
const updateTodo = (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;
    const toUpdateIndex = TODOS.findIndex((todo) => todo.id === id);
    if (toUpdateIndex < 0) {
        throw new Error("could not find Todo!");
    }
    TODOS.splice(toUpdateIndex, 1, new todo_1.Todo(id, text));
    res.status(200).json({
        message: "Todo list updated",
        updatedTodos: TODOS,
    });
};
exports.updateTodo = updateTodo;
//delete
const deleteTodo = (req, res, next) => {
    const { id } = req.params;
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
exports.deleteTodo = deleteTodo;
