export default interface ITokenProvider {
  createToken(id: string, email: string): Promise<string>;
}
