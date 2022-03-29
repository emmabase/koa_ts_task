import server from "../../src/server";
import request from "supertest";
import data from "../../src/data";

afterEach(done => {
  server.close();
  done();
});

describe("routes/apiRoutes", () => {
  it("arrayContaining", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.data).toEqual(expect.arrayContaining(data));
  });
});
