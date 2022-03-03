import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should render an anchor with the test HOME from the Navigation component ", () => {
      const anchorMessage = "HOME";

      render(<Layout />);

      const anchor = screen.getByRole("link", { name: anchorMessage });

      expect(anchor).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a heading as a child", () => {
    test("Then it should render the heading ", () => {
      const expectedHeading = "ALBERT";

      render(
        <Layout>
          <h1>ALBERT</h1>
        </Layout>
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
