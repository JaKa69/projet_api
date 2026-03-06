const request = require("supertest");
const app = require("../app");

describe("Auth API", () => {

  const user = {
    firstname: "Test",
    lastname: "User",
    email: "test@test.com",
    password: "123456"
  };

  it("should register a user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send(user);

    expect(res.statusCode).toBe(201);
    expect(res.body.email).toBe(user.email);
  });

  it("should login a user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: user.email,
        password: user.password
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

});