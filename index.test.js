const request = require("supertest");
const app = require("./index");

let server;
const consoleSpy = jest.spyOn(console, "log");

beforeEach(async () => {
  server = await app.listen(4000);
});

afterAll(() => {
  server.close();
});

describe("API tests", () => {
  test("Should run", async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    }); // delays to allow for console output to load otherwise will get error

    const expectedOutput = [
      "\nWelcome, the Psalms API is active :) \n",
      "\nConnected successfully to Database \n",
    ];

    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy.mock.calls.join(" ")).toEqual(expectedOutput.join(" "));
    setTimeout(process.exit(), 4000);
  });
});
