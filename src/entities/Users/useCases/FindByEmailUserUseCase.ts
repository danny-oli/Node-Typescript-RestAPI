import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IFindByEmailUserRequestDTO } from "../interfaces/IFindByEmailUserRequestDTO";
import { IUser } from "../interfaces/IUser";

export class FindByEmailUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute(data: IFindByEmailUserRequestDTO) {
    const user: IUser = await this.usersRepository.findByEmail(data.email);
    if(!user) throw new Error(`User not found.`)
    return user;
  }
}