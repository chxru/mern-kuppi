import { Router } from "express";
import { SaveTodo } from "../controller/todo.controller";

const router = Router();

// todo/new
router.post("/new", async (req, res) => {
  const { title, description } = req.body;
  try {
    await SaveTodo(title, description);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
