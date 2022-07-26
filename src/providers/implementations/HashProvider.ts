import IBcryptHashProvider from "../IBcryptHashProvider";
const bcrypt = require('bcrypt');

export class HashProvider implements IBcryptHashProvider {
    private hashAgent: any;

    constructor() {
        try {
            this.hashAgent = bcrypt;

        } catch (error) {
            throw error;
        }
    }
    async hashPassword(plainText: string, salt: string): Promise<string> {
        try {
            return this.hashAgent.hashSync(plainText, salt);
        } catch (error) {
            console.log({ error })
            throw error;
        }
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