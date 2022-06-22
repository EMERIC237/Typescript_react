import { Router } from "express";
import {
  createTodo,
  listTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router = Router();

router.post("/", createTodo);

router.get("/", listTodo);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
