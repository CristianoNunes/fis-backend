import connectDB from "../../ormconfig";
import { Task } from "../database/entities/Task";

export class DeleteTaskService {
  async execute(id: string) {
    const repo = connectDB.getRepository(Task);

    const taskExists = await repo.findOne({ where: { id } });

    if (!taskExists) {
      return new Error("Task does not exists");
    }
    await repo.delete(id);
  }
}
