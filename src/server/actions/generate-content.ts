"use server";

import { createGeminiModel, generateContent } from "@/service/gemini";
import { TranslationFormData } from "@/schemas/translation-schema";

export async function generateTranslation(data: TranslationFormData) {
  try {
    const model = createGeminiModel(data.apiKey, data.model!);
    const result = await generateContent(
      model,
      data.message,
      data.systemMessage
    );

    const response = result.response;
    const text = response.text();
    
    return {
      success: true,
      content: text || ''
    };
  } catch (error) {
    console.error('Error generating content:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error desconocido'
    } as const;
  }
}