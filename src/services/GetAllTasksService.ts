import connectDB from "../../ormconfig";
import { Task } from "../database/entities/Task";

export class GetAllTasksService {
  async execute() {
    const repo = connectDB.getRepository(Task);

    const tasks = await repo.find();

    return tasks;
  }
}
