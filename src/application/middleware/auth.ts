import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";


export const Auth = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const headerToken: string | undefined = request.headers['x-access-token']?.toString();

    if (!headerToken) throw 'No token provided.';

    const secret: Secret | undefined = process.env.JWT_SECRET;
    if (!secret) throw 'Jwt Secret not found!';
    jwt.verify(headerToken, secret, (err: any, data: any) => {
      if (err) return response.sendStatus(401);
      next();
      return;
    });
  } catch (error) {
    response.status(400).json({ error })
  }
};
