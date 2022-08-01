import IBcryptHashProvider from "../../../providers/IBcryptHashProvider";
import IUuidProvider from "../../../providers/IUuidProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "../interfaces/ICreateUserRequestDTO";
import { User } from "../User";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IBcryptHashProvider,
    private uuidProvider: IUuidProvider
  ) { }

  async execute(data: ICreateUserRequestDTO) {

    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }
    const user = new User(data);

    // Integration-key
    const hash: string = await this.hashProvider.hashPassword(user.password);
    user.password = hash;
    const uuidKey: string = this.uuidProvider.generateUuid(user.password);
    user.key = uuidKey;

    await this.usersRepository.create(user);
    return user;
  }
}