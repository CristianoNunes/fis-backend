import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";

export class CreateTaskConrtroller {
  async handle(request: Request, response: Response) {
    const { title, description } = request.body;

    const service = new CreateTaskService();

    const result = await service.execute({ title, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
