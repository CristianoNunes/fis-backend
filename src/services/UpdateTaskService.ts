import connectDB from "../../ormconfig";
import { Task } from "../database/entities/Task";

type TaskUpdateRequest = {
  id: string;
  title: string;
  description: string;
};

export class UpdateTaskService {
  async execute({ id, title, description }: TaskUpdateRequest) {
    const repo = connectDB.getRepository(Task);

    const task = await repo.findOne({ where: { id } });

    if (!task) {
      return new Error("Task does not exists");
    }

    task.title = title ? title : task.title;
    task.description = description ? description : task.description;

    await repo.save(task);

    return task;
  }
}
