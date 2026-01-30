import express, { Request, Response, Next } from "express";
import helmet from "helmet";
import { limiter } from "./src/middlewares/limits";
import { appRouter } from "./src/routers";

const app = express();
const port = process.env.PORT || 8080;

app.set("trust proxy", 1);
app.use(helmet());
app.use(express.json({ limit: "32kb" }));
app.use(limiter);

app.use(express.static("public"));

app.use((req: Request, res: Response, next: Next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.use("/", appRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
