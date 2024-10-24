import express, { Response, Request } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the whatsapp template API! This is the base endpoint.",
  });
});
