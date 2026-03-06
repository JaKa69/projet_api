const request = require("supertest");
const app = require("../app");

describe("Category API", () => {

  it("should get categories", async () => {
    const res = await request(app).get("/api/categories");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});