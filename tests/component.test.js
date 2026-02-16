const request = require("supertest");
const app = require("../app");

describe("Protected route", () => {

  it("should deny access without token", async () => {
    const res = await request(app)
      .post("/api/components")
      .send({
        brand: "Intel",
        title: "i7"
      });

    expect(res.statusCode).toBe(401);
  });

});
