const request = require("supertest");
const app = require("../app");

let token;

describe("Configuration API", () => {

  beforeAll(async () => {

    const login = await request(app)
      .post("/api/auth/login")
      .send({
        email: "test@test.com",
        password: "123456"
      });

    token = login.body.token;

  });

  it("should get my configurations", async () => {

    const res = await request(app)
      .get("/api/configurations")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);

  });
});