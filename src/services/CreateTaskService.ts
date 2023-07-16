import { Task } from "../database/entities/Task";
import connectDB from "../../ormconfig";
import { FindOneOptions } from "typeorm";

type TaskRequest = {
  title: string;
  description: string;
};

export class CreateTaskService {
  async execute({ title, description }: TaskRequest): Promise<Task | Error> {
    const repo = connectDB.getRepository(Task);

    const taskExists = await repo.findOne({ where: { title } });

    if (taskExists) {
      return new Error("Task already exists");
    }

    const task = repo.create({
      title,
      description,
    });

    await repo.save(task);

    return task;
  }
}
