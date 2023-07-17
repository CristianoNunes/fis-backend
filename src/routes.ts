import { Router } from "express";
import { CreateTaskConrtroller } from "./controllers/CreateTaskController";
import { GetAllTasksController } from "./controllers/GetAllTasksController";
import { DeleteTaskController } from "./controllers/DeleteTaskController";
import { UpdateTaskController } from "./controllers/UpdateTaskController";

const routes = Router();

routes.post("/tasks", new CreateTaskConrtroller().handle);

routes.get("/tasks", new GetAllTasksController().handle);

routes.delete("/tasks/:id", new DeleteTaskController().handle);

routes.put("/tasks/:id", new UpdateTaskController().handle);

export { routes };
