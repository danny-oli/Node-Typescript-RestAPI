// import { Server } from "../../src/application/server";
// import supertest from "supertest";

// let server: Server;
// beforeAll(async () => {
//   server = new Server();
//   await server.appConfig();
//   await server.start();
// });

// // Find Hotels Test
// describe("API Get Hotel Test", () => {
//   test("It should return an array of hotel objects.", async () => {
//     const cityCode = "LON";
//     const { body, status } = await supertest(await server.getApp()).get(`/hotel/find/${cityCode}`).send();
//     expect(status).toBe(200);
//     expect(body).toHaveProperty('hotels');
//   });
// });

// afterAll(async () => await server.close());