import { IUser } from "../entities/Users/interfaces/IUser";

export interface IUsersRepository {
  create(user: IUser): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  findById(_id: string): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  update(user: IUser): Promise<IUser>;
  save(user: IUser): Promise<IUser>;
  delete(_id: string): Promise<IUser | void>;
}