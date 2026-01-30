import { Router } from "express";
import { greenRouter } from "./green";

export const appRouter = Router();

appRouter.use("/green", greenRouter);
