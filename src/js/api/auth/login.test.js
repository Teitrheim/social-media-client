import { login } from "../auth/login.js";
import { apiPath } from "../constants.js";
import { headers } from "../headers";
import * as storage from "../../storage/index.js";

// Mocking fetch and storage
global.fetch = jest.fn();
jest.mock("../../storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

describe("Login Function", () => {
  beforeEach(() => {
    fetch.mockClear();
    jest.clearAllMocks(); // Clear all mocks, including save
  });

  it("saves token and profile on successful login", async () => {
    const mockProfile = { accessToken: "mockToken", name: "John Doe" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockProfile),
    });

    storage.load.mockReturnValue("mockToken");
    const profile = await login("john@example.com", "password123");

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({
        email: "john@example.com",
        password: "password123",
      }),
      headers: headers("application/json"),
    });
    expect(storage.save).toHaveBeenCalledWith("token", "mockToken");
    expect(storage.save).toHaveBeenCalledWith("profile", { name: "John Doe" });
    expect(profile).toEqual({ name: "John Doe" });
  });

  it("throws an error on login failure", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized",
    });

    storage.load.mockReturnValue(null);

    await expect(login("john@example.com", "wrongpass")).rejects.toThrow(
      "Unauthorized"
    );
  });
});
