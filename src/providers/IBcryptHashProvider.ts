export default interface IBcryptHashProvider {
    hashPassword(plainText: string, salt: number): string;
}
