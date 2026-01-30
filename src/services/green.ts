import { generateIdForMessage } from "../helpers/green/generateIdForMessage";
import { Message, File } from "../interfaces/green";

export async function getSettings(
  idInstance: string,
  apiTokenInstance: string,
): Promise<any> {
  return {
    idInstance,
    webhookUrl: "https://example.com/webhook",
    webhookUrlToken: apiTokenInstance,
  };
}

export async function getStateInstance(
  idInstance: string,
  apiTokenInstance: string,
): Promise<any> {
  return {
    idInstance,
    stateInstance: "authorized",
  };
}

export async function sendMessage(payload: Message): Promise<any> {
  return {
    idMessage: `${generateIdForMessage()}`,
    chatId: payload.chatId,
    message: payload.message,
    status: "sent",
  };
}

export async function sendFileByUrl(payload: File): Promise<any> {
  return {
    idMessage: `${generateIdForMessage()}`,
    chatId: payload.chatId,
    fileName: payload.fileName,
    urlFile: payload.urlFile,
    status: "sent",
  };
}
