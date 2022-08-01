import IBcryptHashProvider from "../../../providers/IBcryptHashProvider";
import ITokenProvider from "../../../providers/ITokenProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IUserLoginRequestDTO } from "../interfaces/IUserLoginRequestDTO";

export class UserLoginUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private hashProvider: IBcryptHashProvider,
        private tokenProvider: ITokenProvider,
    ) { }

    async execute(data: IUserLoginRequestDTO) {
        const user = await this.usersRepository.findByEmail(data.email);
        if (!user) throw new Error(`User not found!`);

        const passwordIsCorrect = await this.hashProvider.compare(user.password, data.password);
        console.log({ passwordIsCorrect })
        if (!passwordIsCorrect) throw new Error(`Email or Password incorrect!`);

        return await this.tokenProvider.createToken(user._id, user.email);
    }
}