import * as greenService from "../services/green";
import { Request, Response } from "express";

const getSettings = async (req: Request, res: Response) => {
  try {
    const { idInstance, apiTokenInstance } = req.body ?? {};
    const data = await greenService.getSettings(idInstance, apiTokenInstance);
    return res.json(data);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" });
  }
};

const getStateInstance = async (req: Request, res: Response) => {
  try {
    const { idInstance, apiTokenInstance } = req.body ?? {};
    const data = await greenService.getStateInstance(
      idInstance,
      apiTokenInstance,
    );
    return res.json(data);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" });
  }
};

const sendMessage = async (req: Request, res: Response) => {
  try {
    const { idInstance, apiTokenInstance, ...payload } = req.body ?? {};
    const data = await greenService.sendMessage(payload);
    return res.json(data);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" });
  }
};

const sendFileByUrl = async (req: Request, res: Response) => {
  try {
    const { idInstance, apiTokenInstance, ...payload } = req.body ?? {};
    const data = await greenService.sendFileByUrl(payload);
    return res.json(data);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" });
  }
};

export { getSettings, getStateInstance, sendMessage, sendFileByUrl };
