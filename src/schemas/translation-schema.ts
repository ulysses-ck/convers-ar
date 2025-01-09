import { z } from "zod";

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
});

export type TranslationFormData = z.infer<typeof translationSchema>; 