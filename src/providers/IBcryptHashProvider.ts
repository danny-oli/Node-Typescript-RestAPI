export default interface IBcryptHashProvider {
    hashPassword(plainText: string): Promise<string>;
    compare(storedPassword: string, password: string): Promise<string>;
    genSalt(): string;
}
