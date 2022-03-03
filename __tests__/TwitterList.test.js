import { render, screen } from "@testing-library/react";
import TwitterList, { getServerSideProps } from "../pages/twit-list";
import "whatwg-fetch";

describe("Given a TwitterList component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a heading and a twitter list", () => {
      const twits = { tuits: ["hola"] };
      const expectedHeading = "TODAYS TWITESSS:";

      render(<TwitterList twits={twits} />);

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});

describe("Given a getServerSideProps function", () => {
  describe("When it is called", () => {
    test("Then it should return an object with a property props", async () => {
      const response = {
        props: {
          twits: [
            {
              text: "hola",
            },
            {
              text: "hola2",
            },
          ],
        },
      };

      const expectedResponse = await getServerSideProps();

      expect(expectedResponse).toEqual(response);
    });
  });
});
