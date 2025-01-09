import { Model } from "@/types/gemini";
import {
  GenerativeModel,
  GoogleGenerativeAI,
  ModelParams,
  type ResponseSchema,
} from "@google/generative-ai";

const baseUrl = "https://generativelanguage.googleapis.com/";

interface ModelsResponse {
  models: Model[];
}

export async function listModels(apiKey: string): Promise<Model[]> {
  const response = await fetch(`${baseUrl}v1beta/models?key=${apiKey}`);
  const data = (await response.json()) as ModelsResponse;
  return data.models;
}

export function createGeminiModel(
  apiKey: string,
  model: Model,
  responseSchema?: ResponseSchema
) {
  const genAI = new GoogleGenerativeAI(apiKey);

  // if responseSchema is provided, add it to the modelParams
  const responseSchemaObj =
    responseSchema && Object.keys(responseSchema).length > 0
      ? {
          responseSchema: responseSchema,
          responseType: "application/json",
        }
      : {};

  const modelParams: ModelParams = {
    model: model.name,
    generationConfig: {
      temperature: model.temperature,
      topP: model.topP,
      maxOutputTokens: model.outputTokenLimit,
      ...responseSchemaObj,
    },
  };
  const modelResult = genAI.getGenerativeModel(modelParams);

  return modelResult;
}

export async function generateContent(
  model: GenerativeModel,
  prompt: string,
  systemMessage: string
) {
  const result = await model.generateContent({
    contents: [
      {
        role: "system",
        parts: [
          {
            text: systemMessage,
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  });
  return result;
}
