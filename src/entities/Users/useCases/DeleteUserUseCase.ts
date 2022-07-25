import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IDeleteUserRequestDTO } from "../interfaces/IDeleteUserRequestDTO";

export class DeleteUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute(data: IDeleteUserRequestDTO) {
    return await this.usersRepository.delete(data._id);
  }
}