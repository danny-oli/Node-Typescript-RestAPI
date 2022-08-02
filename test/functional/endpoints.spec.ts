import { Server } from "../../src/application/server";
import supertest from "supertest";

let server: Server;
beforeAll(async () => {
    server = new Server();
    await server.appConfig();
    await server.start();
});

let user: any;

//[ USERS ]
// Create User Test
describe("This test creates a new User and then try to create the same User twice", () => {
    it("should return a new User", async () => {
        const response = await supertest(await server.getApp()).post("/user/create").send({
            username: "tui jest test",
            email: "tui.test@tui.com",
            password: "Password123",
        });

        expect(response.status).toBe(201);
        user = {
            _id: response.body._id,
            email: response.body.email,
            password: "Password123",
        }
        expect(response.body).toHaveProperty('_id');
    });

    it("should fail because the user already exists", async () => {
        const { body, status } = await supertest(await server.getApp()).post("/user/create").send({
            username: "tui jest test",
            email: "tui.test@tui.com",
            password: "Password123",
        });

        expect(status).toBe(400);
        expect(body).toEqual({
            message: "User already exists."
        });
    });

});

// Login to generate a new JWT Token
describe("Login to generate JWT", () => {
    it("should return a valid JWT", async () => {
        const response = await supertest(await server.getApp()).post("/user/login").send({
            email: user.email,
            password: user.password,
        });

        expect(response.status).toBe(200);
        // user.jwt = response.headers['Authorization'];
        user.jwt = response.headers['authorization'];
    });

    it("should fail because the user password is wrong", async () => {
        const { body, status } = await supertest(await server.getApp()).post("/user/login").send({
            email: user.email,
            password: "wrong password",
        });

        expect(status).toBe(400);
        expect(body).toEqual({
            message: "Email or Password incorrect!"
        });
    });

});


// Find by Email Test
describe("This test finds a User by it's email", () => {
    it("should return a User", async () => {
        const email = "tui.test@tui.com";
        const response = await supertest(await server.getApp()).get(`/user/find-by-email/${email}`).send().set({ 'x-access-token': user.jwt });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id');
    });

    it("should fail because the email doesn't exists", async () => {
        const email = "invalid@mail.com";
        const { body, status } = await supertest(await server.getApp()).get(`/user/find-by-email/${email}`).send().set({ 'x-access-token': user.jwt });

        expect(status).toBe(404);
        expect(body).toEqual({
            message: "User not found."
        });
    });

});

// Find by _id Test
describe("This test finds a User by it's _id", () => {
    it("should return a User", async () => {
        const _id = user._id;
        const { body, status } = await supertest(await server.getApp()).get(`/user/find-by-id/${_id}`).send().set({ 'x-access-token': user.jwt });
        expect(status).toBe(200);
        expect(body).toHaveProperty('_id');
    });

    it("should fail because the _id doesn't exists", async () => {
        const _idFake = "62de35db4d8e2143907b557a";
        const { body, status } = await supertest(await server.getApp()).get(`/user/find-by-id/${_idFake}`).send().set({ 'x-access-token': user.jwt });

        expect(status).toBe(404);
        expect(body).toEqual({
            message: "User not found!"
        });
    });

});

// Find all users Test
describe("This test finds all stored Users", () => {
    it("should return a Users array", async () => {

        const { body, status } = await supertest(await server.getApp()).get(`/user/find-all`).send().set({ 'x-access-token': user.jwt });
        expect(status).toBe(200);
        expect.arrayContaining(body);
    });
});

// Udate user test
describe("This test updates a User by it's _id", () => {
    it("should update a User", async () => {
        const test_id = user._id;
        const userMock = {
            username: "tui jest test",
            email: "new.tui.test@tui.com",
            password: "NewPass123",
            key: user.key
        }
        const response = await supertest(await server.getApp()).put(`/user/update/${test_id}`).send(userMock).set({ 'x-access-token': user.jwt });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id');
        expect(response.body.email).toBe(userMock.email);
    });

    it("should fail because the email is already taken for a differente _id.", async () => {
        const _idFake = "62de35db4d8e2143907b557a";
        const userMock = {
            _id: _idFake,
            username: "tui jest test",
            email: "new.tui.test@tui.com",
            password: "NewPass123",
            key: user.key
        }
        const { body, status } = await supertest(await server.getApp()).put(`/user/update/${_idFake}`).send(userMock).set({ 'x-access-token': user.jwt });

        expect(status).toBe(404);
        expect(body).toEqual({
            message: "Another user is already using this e-mail."
        });
    });

    it("should fail because the email doest not exist on database.", async () => {
        const _idFake = "62de35db4d8e2143907b557a";
        const userMock = {
            _id: _idFake,
            username: "tui jest test",
            email: "hire.me@tui.com",
            password: "NewPass123",
            key: user.key
        }
        const { body, status } = await supertest(await server.getApp()).put(`/user/update/${_idFake}`).send(userMock).set({ 'x-access-token': user.jwt });

        expect(status).toBe(404);
        expect(body).toEqual({
            message: "User not found to update."
        });
    });

});

// Delete User test
describe("This test deletes a User by it's _id", () => {
    it("should Delete a User", async () => {
        const _id = user._id;
        const { status } = await supertest(await server.getApp()).delete(`/user/delete/${_id}`).send().set({ 'x-access-token': user.jwt });
        expect(status).toBe(204);
    });

    it("should fail because the User doesn't exists anymore", async () => {
        const _id = user._id;
        const { body, status } = await supertest(await server.getApp()).delete(`/user/delete/${_id}`).send().set({ 'x-access-token': user.jwt });

        expect(status).toBe(404);
        expect(body).toEqual({
            message: "User not found!"
        });
    });

});

// //[ HOTELS ]
// // Find Hotels Test
// describe("API Get Hotel Test", () => {
//     test("It should return an array of hotel objects.", async () => {
//         const cityCode = "LON";
//         const { body, status } = await supertest(await server.getApp()).get(`/hotel/find/${cityCode}`).send().set({ 'x-access-token': user.jwt });
//         expect(status).toBe(200);
//         expect(body).toHaveProperty('hotels');
//     });
// });

// describe("Get previous searches", () => {
//     test("It should return an array of the previous searches.", async () => {
//         const { body, status } = await supertest(await server.getApp()).get(`/hotel/search-history`).send().set({ 'x-access-token': user.jwt });
//         expect(status).toBe(200);
//         expect(body).toHaveProperty('body');
//     });
// });

afterAll(async () => await server.close());