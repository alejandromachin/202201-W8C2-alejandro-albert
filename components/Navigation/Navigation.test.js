import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 5 anchors", () => {
      const numberOfAnchors = 5;
      render(<Navigation />);

      const expectedAnchors = screen.getAllByRole("link").length;

      expect(expectedAnchors).toBe(numberOfAnchors);
    });
  });
});
