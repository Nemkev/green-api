import { Request, Response, Next } from "express";

const requireCreds = (req: Request, res: Response, next: Next) => {
  const { idInstance, apiTokenInstance } = req.body ?? {};

  if (!idInstance || !apiTokenInstance) {
    return res
      .status(400)
      .json({ error: "idInstance and apiTokenInstance are required" });
  }

  next();
};

const requireSendMessageFields = (req: Request, res: Response, next: Next) => {
  const { chatId, message } = req.body ?? {};

  if (!chatId) {
    return res.status(400).json({ error: "chatId is required" });
  }

  if (!message) {
    return res.status(400).json({ error: "message is required" });
  }

  next();
};

const requireSendFileFields = (req: Request, res: Response, next: Next) => {
  const { chatId, urlFile, fileName } = req.body ?? {};

  if (!chatId || !urlFile || !fileName) {
    return res
      .status(400)
      .json({ error: "chatId, urlFile and fileName are required" });
  }

  next();
};

export { requireCreds, requireSendMessageFields, requireSendFileFields };
