import { v4 } from "uuid";
import IUuidProvider from "../IUuidProvider";

export class UuidProvider implements IUuidProvider {
    private uuidAgent: any;

    constructor() {
        try {
            this.uuidAgent = v4();

        } catch (error) {
            throw error;
        }
    }
    generateUuid(): string {
        try {
            return this.uuidAgent;
        } catch (error) {
            console.log({ error })
            throw error;
        }
    }
}