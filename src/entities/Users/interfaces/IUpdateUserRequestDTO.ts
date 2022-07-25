export interface IUpdateUserRequestDTO {
    _id: string;
    username: string;
    email: string;
    password: string;
    key?: string;
}