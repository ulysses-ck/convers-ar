import { Control, Controller, FieldError } from "react-hook-form";
import { Textarea } from "@nextui-org/input";
import { TranslationFormData } from "@/schemas/translation-schema";

interface MessageInputProps {
    control: Control<TranslationFormData>;
    error?: FieldError;
}

export function MessageInput({ control, error }: MessageInputProps) {
    return (
        <Controller
            name="message"
            control={control}
            render={({ field }) => (
                <Textarea
                    {...field}
                    label="Mensaje original"
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full"
                    isInvalid={!!error}
                    errorMessage={error?.message}
                />
            )}
        />
    );
} 