import { Request, Response } from "express";
import { UpdateTaskService } from "../services/UpdateTaskService";

export class UpdateTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description } = request.body;

    const service = new UpdateTaskService();

    const result = await service.execute({ id, title, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
