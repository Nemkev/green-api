import { Router } from "express";
import {
  getSettings,
  getStateInstance,
  sendMessage,
  sendFileByUrl,
} from "../../controllers/green";
import {
  requireCreds,
  requireSendMessageFields,
  requireSendFileFields,
} from "../../middlewares/validation";
import { strictLimiter } from "../../middlewares/limits";

export const greenRouter = Router();

greenRouter.post("/settings", requireCreds, getSettings);
greenRouter.post("/state", strictLimiter, requireCreds, getStateInstance);
greenRouter.post(
  "/message",
  requireCreds,
  requireSendMessageFields,
  sendMessage,
);
greenRouter.post(
  "/file",
  strictLimiter,
  requireCreds,
  requireSendFileFields,
  sendFileByUrl,
);
