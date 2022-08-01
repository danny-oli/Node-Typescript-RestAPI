import IBcryptHashProvider from "../IBcryptHashProvider";
import bcrypt from 'bcrypt';

export class HashProvider implements IBcryptHashProvider {
    private hashAgent: any;

    constructor() {
        try {
            this.hashAgent = bcrypt;

        } catch (error) {
            throw error;
        }
    }
    async hashPassword(plainText: string): Promise<string> {
        try {
            const BCRYPT_SALT = await this.genSalt();
            return await this.hashAgent.hashSync(plainText, BCRYPT_SALT);
        } catch (error) {
            console.log({ error })
            throw error;
        }
    }

    async compare(storedPassword: string, password: string): Promise<string> {
        const compare = await this.hashAgent.compareSync(password, storedPassword);
        console.log({ compare })
        return compare;
    }
    genSalt(): string {
        try {
            return this.hashAgent.genSalt();;
        } catch (error) {
            console.log({ error })
            throw error;
        }
    }
}