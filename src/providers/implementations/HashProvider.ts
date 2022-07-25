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
    hashPassword(plainText: string, salt: number): string {
        try {
            return this.hashAgent.hashSync(plainText, salt);
        } catch (error) {
            console.log({ error })
            throw error;
        }
    }
}