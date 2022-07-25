export default interface IUuidProvider {
    generateUuid(plainText: string): string;
}