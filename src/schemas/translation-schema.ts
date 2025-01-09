import { z } from "zod";
import { Model } from "@/types/gemini";

export const translationSchema = z.object({
  message: z.string()
    .min(1, "El mensaje es requerido")
    .max(1000, "El mensaje no puede exceder los 1000 caracteres"),
  temperature: z.number()
    .min(0, "La temperatura mínima es 0")
    .max(1, "La temperatura máxima es 1"),
  topP: z.number()
    .min(0, "El valor mínimo de Top P es 0")
    .max(1, "El valor máximo de Top P es 1"),
  apiKey: z.string()
    .min(1, "La API key es requerida"),
  model: z.custom<Model>((val) => val instanceof Object, {
    message: "Debes seleccionar un modelo"
  }),
  systemMessage: z.string().default("Convertí el mensaje en un mensaje corporativo y políticamente correcto.")
});

export type TranslationFormData = z.infer<typeof translationSchema>; 