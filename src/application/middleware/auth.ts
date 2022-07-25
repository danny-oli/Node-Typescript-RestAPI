import { Request, Response, NextFunction } from "express";
import { IUser } from "../../entities/Users/interfaces/IUser";
import UserRepository from "../../repositories/implementations/UsersRepository";

export const Auth = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const { email, key } = request.body;
    const userRepository = new UserRepository();
    const user: IUser = await userRepository.findByEmail(email);
    if (user && user.key != key) throw new Error('Email already taken');

    next();

  } catch (error) {
    response.status(400).json({ error })
  }
};
