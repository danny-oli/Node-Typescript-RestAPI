import { IUser } from "../../entities/Users/interfaces/IUser";
import { IUsersRepository } from "../IUsersRepository";
import { User as UserEntity } from "../../entities/Users/User";

export default class UserRepository implements IUsersRepository {
    public async create(user: IUser): Promise<IUser> {
        try {
            const userEntity = new UserEntity(user);
            const userSaved: IUser = await userEntity.save();

            return userSaved;
        } catch (error) {
            console.log({ error })
            throw error;
        }
    }

    public async findByEmail(email: string): Promise<IUser> {
        try {
            const foundUser: IUser | any = await UserEntity.findOne({ email });
            return foundUser;
        } catch (error) {
            throw error;
        }
    }

    public async findById(_id: string): Promise<IUser> {
        try {
            const foundUser: IUser | any = await UserEntity.findOne({ _id });
            return foundUser;
        } catch (error) {
            throw error;
        }
    }

    public async findAll(): Promise<IUser[]> {
        try {
            const foundUsers = await UserEntity.find();
            return foundUsers;
        } catch (error) {
            throw error;
        }
    }

    public async save(user: IUser): Promise<IUser> {
        try {
            let foundUser: IUser | any = await UserEntity.find(user);
            if (!foundUser) throw new Error(`User not found!`);
            foundUser = user;
            await foundUser.save();
            return foundUser;
        } catch (error) {
            throw error;
        }
    }

    public async update(user: IUser): Promise<IUser | any> {
        try {
            return await UserEntity.findByIdAndUpdate(
                { _id: user._id },
                { $set: user },
                { new: true }
            );
        } catch (error) {
            throw error;
        }
    }

    public async delete(_id: string): Promise<IUser | any> {
        const foundUser: IUser | any = await UserEntity.findOne({ _id });
        if (!foundUser) throw new Error(`User not found!`);

        return await UserEntity.findByIdAndDelete(_id);
    }
}
