const request = require("supertest");
const app = require("../app");

describe("Configuration", () => {

  it("should not allow access without token", async () => {
    const res = await request(app)
      .get("/api/configurations");

    expect(res.statusCode).toBe(401);
  });

});
