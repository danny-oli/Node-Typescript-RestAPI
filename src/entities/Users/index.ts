import UserRepository from "../../repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "./useCases/CreateUserUseCase";
import { DeleteUserUseCase } from "./useCases/DeleteUserUseCase";
import { FindByEmailUserUseCase } from "./useCases/FindByEmailUserUseCase";
import { FindAllUserUseCase } from "./useCases/FindAllUserUseCase";
import { FindByIdUserUseCase } from "./useCases/FindByIdUserUseCase";
import { UpdateUserUseCase } from "./useCases/UpdateUserUseCase";
import { UserController } from "./UserController";
import { HashProvider } from "../../providers/implementations/HashProvider";
import { UuidProvider } from "../../providers/implementations/UuidProvider";

const usersRepository = new UserRepository();
const hashProvider = new HashProvider();
const uuidProvider = new UuidProvider();
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

const createUserController = new UserController(
  createUserUseCase,
  findByEmailUserUseCase,
  findByIdUserUseCase,
  findAllUserUseCase,
  updateUserUseCase,
  deleteUserUseCase
)

export { createUserUseCase, createUserController, findByEmailUserUseCase }