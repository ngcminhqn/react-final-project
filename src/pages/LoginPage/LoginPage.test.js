import LoginPage from "./LoginPage";
import { renderWithProviders } from "../../utils/test-utils";

describe("Login", () => {
  it("render login", async () => {
    const { container } = renderWithProviders(<LoginPage />);
    expect(container).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
