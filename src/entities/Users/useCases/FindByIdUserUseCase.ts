import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IFindByIdUserRequestDTO } from "../interfaces/IFindByIdUserRequestDTO";

export class FindByIdUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute(data: IFindByIdUserRequestDTO) {
    const user = await this.usersRepository.findById(data._id);
    if (!user) throw new Error(`User not found!`);

    return user;
  }
}