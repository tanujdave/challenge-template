const request = require("supertest");
const app = require("../src/app");

describe("Projects", () => {
  id("should be able to add new project", async () => {
    const response = await request(app).post("/projects").send({
      title: "Nova",
      owner: "Diego",
    });

    expect(response.body).toEqual({
      title: "Nova",
      owner: "Diego",
    });
  });

  it("should be able to list projects", async () => {
    await request(app).post("/projects").send({
      title: "Nova",
      owner: "Diego",
    });

    const response = await request(app).get("/projects");

    expect(response.body).toEqual(
      expect.arrayContaining([{ title: "Nova", owner: "Diego" }])
    );
  });
});
