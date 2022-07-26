export default interface IBcryptHashProvider {
    hashPassword(plainText: string, salt: string): Promise<string>;
    genSalt(): string;
}
