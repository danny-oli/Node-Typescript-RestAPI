export default interface iTokenProvider {
  createToken(id: string, email: string): Promise<string>;
}
