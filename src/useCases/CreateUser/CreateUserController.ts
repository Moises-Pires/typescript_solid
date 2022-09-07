import { Request, Response } from "express";
import { CreateUserUserCase } from "./CreateUserUserCase";

export class CreateUserController {
  constructor(private createUserCase: CreateUserUserCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      await this.createUserCase.execute({
        name,
        email,
        password,
      });

      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
