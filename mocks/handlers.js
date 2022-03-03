import { rest } from "msw";
debugger;
export const handlers = [
  rest.get(
    "https://tuitah-alejandro-albert.herokuapp.com/",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            text: "hola",
          },
          {
            text: "hola2",
          },
        ])
      );
    }
  ),
];
debugger;
