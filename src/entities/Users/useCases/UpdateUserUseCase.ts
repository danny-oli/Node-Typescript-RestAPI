import IBcryptHashProvider from "../../../providers/IBcryptHashProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUpdateUserRequestDTO } from "../interfaces/IUpdateUserRequestDTO";

export class UpdateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IBcryptHashProvider,
  ) { }

  async execute(data: IUpdateUserRequestDTO) {
    const SALT = await this.hashProvider.genSalt();
    let foundUser = await this.usersRepository.findByEmail(data.email);
    const emailTakenByOtherUser = foundUser && foundUser._id != data._id;
    if (emailTakenByOtherUser) throw new Error('Another user is already using this e-mail.');

    foundUser = await this.usersRepository.findById(data._id);
    if (!foundUser) throw new Error(`User not found to update.`);

    data.password = await this.hashProvider.hashPassword(data.password, SALT)
    return await this.usersRepository.update(data);
  }
}