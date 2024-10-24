import express, { Response, Request } from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the SCL API! This is the base endpoint.",
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
