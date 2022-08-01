import UserRepository from "../../repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "./useCases/CreateUserUseCase";
import { DeleteUserUseCase } from "./useCases/DeleteUserUseCase";
import { FindByEmailUserUseCase } from "./useCases/FindByEmailUserUseCase";
import { FindAllUserUseCase } from "./useCases/FindAllUserUseCase";
import { FindByIdUserUseCase } from "./useCases/FindByIdUserUseCase";
import { UpdateUserUseCase } from "./useCases/UpdateUserUseCase";
import { UserLoginUseCase } from "./useCases/UserLoginUseCase";
import { UserController } from "./UserController";
import { HashProvider } from "../../providers/helper/HashProvider";
import { UuidProvider } from "../../providers/helper/UuidProvider";
import TokenProvider from "../../providers/helper/TokenProvider";

const usersRepository = new UserRepository();
const hashProvider = new HashProvider();
const uuidProvider = new UuidProvider();
const tokenProvider = new TokenProvider();

const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  hashProvider,
  uuidProvider
)

const findByEmailUserUseCase = new FindByEmailUserUseCase(
  usersRepository,
)
const findByIdUserUseCase = new FindByIdUserUseCase(
  usersRepository,
)
const findAllUserUseCase = new FindAllUserUseCase(
  usersRepository,
)
const updateUserUseCase = new UpdateUserUseCase(
  usersRepository,
  hashProvider
)
const deleteUserUseCase = new DeleteUserUseCase(
  usersRepository,
)

const userLoginUseCase = new UserLoginUseCase(
  usersRepository,
  hashProvider,
  tokenProvider
)

const createUserController = new UserController(
  createUserUseCase,
  findByEmailUserUseCase,
  findByIdUserUseCase,
  findAllUserUseCase,
  updateUserUseCase,
  deleteUserUseCase,
  userLoginUseCase
)

export { createUserUseCase, createUserController, findByEmailUserUseCase }