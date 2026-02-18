const request = require("supertest");
const app = require("../app");

describe("Auth", () => {

  it("should register a user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        firstname: "John",
        lastname: "Doe",
        email: "john@test.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.email).toBe("john@test.com");
  });

  it("should login a user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "john@test.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

});
