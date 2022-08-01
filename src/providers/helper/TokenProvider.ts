import jwt, { Secret, SignOptions } from "jsonwebtoken";
import IToken from "../iTokenProvider";

export default class TokenProvider implements IToken {
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
