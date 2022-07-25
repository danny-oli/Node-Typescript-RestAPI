/* eslint-disable no-restricted-syntax */
import { Server } from "./server";

export const app = async (): Promise<void> => {
    try {
        const server = new Server();
        await server.appConfig();
        server.start();
    } catch (error) {
        console.log({ error });
        throw error;
    }
};

app();
