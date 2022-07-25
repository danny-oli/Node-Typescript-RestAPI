import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUser } from "../interfaces/IUser";

export class FindAllUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute() {
    const users: IUser[] = await this.usersRepository.findAll()
    return users;
  }
}