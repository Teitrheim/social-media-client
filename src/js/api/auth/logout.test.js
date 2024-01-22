import { logout } from "../auth/logout.js";
import { remove } from "../../storage/index.js";

jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("Logout Function", () => {
  it("removes token and profile from storage", () => {
    // Act
    logout();

    // Assert
    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
