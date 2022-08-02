import jwt, { Secret } from "jsonwebtoken";
import ITokenProvider from "../TokenProvider";

export default class TokenProvider implements ITokenProvider {
  public async createToken(id: string, email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const secret: Secret | undefined = process.env.JWT_SECRET;
      if (!secret) throw new Error('Jwt Secret not found!')

      jwt.sign({ id, email }, secret, async (err: any, token: any) => {
        if (err) reject(err);
        else resolve(token);
      });
    });
  }
}
