import { Request, Response } from "express";
import { CreateUserUseCase } from "./useCases/CreateUserUseCase";
import { DeleteUserUseCase } from "./useCases/DeleteUserUseCase";
import { FindByEmailUserUseCase } from "./useCases/FindByEmailUserUseCase";
import { FindAllUserUseCase } from "./useCases/FindAllUserUseCase";
import { FindByIdUserUseCase } from "./useCases/FindByIdUserUseCase";
import { UpdateUserUseCase } from "./useCases/UpdateUserUseCase";

export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private findByEmailUserUseCase: FindByEmailUserUseCase,
    private findByIdUserUseCase: FindByIdUserUseCase,
    private findAllUserUseCase: FindAllUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
  ) { }

  async create(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;
    try {
      const newUser = await this.createUserUseCase.execute({
        username,
        email,
        password
      })
      return response.status(201).send(newUser);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

  async findByEmail(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;
    try {
      const user = await this.findByEmailUserUseCase.execute({ email })
      return response.status(200).send(user);
    } catch (err: any) {
      return response.status(404).json({
        message: err.message || 'Unexpected server error.'
      })
    }
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    try {
      const user = await this.findByIdUserUseCase.execute({ _id })
      return response.status(200).send(user);
    } catch (err: any) {
      return response.status(404).json({
        message: err.message || 'Unexpected server error.'
      })
    }
  }

  async findAll(_request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.findAllUserUseCase.execute()
      return response.status(200).send(users);
    } catch (err: any) {
      return response.status(404).json({
        message: err.message || 'Unexpected server error.'
      })
    }
  }
  async update(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const { username, email, password } = request.body;
    try {
      const updatedUser = await this.updateUserUseCase.execute({
        _id,
        username,
        email,
        password
      })
      return response.status(200).send(updatedUser);
    } catch (err: any) {
      return response.status(404).json({
        message: err.message || 'Unexpected server error.'
      })
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    try {
      const deletedUser = await this.deleteUserUseCase.execute({ _id })
      return response.status(204).send(deletedUser);
    } catch (err: any) {
      return response.status(404).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}