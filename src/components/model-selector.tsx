import { Select, SelectItem } from "@nextui-org/select";
import { Control, Controller, FieldError } from "react-hook-form";
import { Model } from "@/types/gemini";
import { TranslationFormData } from "@/schemas/translation-schema";

interface ModelSelectorProps {
    control: Control<TranslationFormData>;
    error?: FieldError;
    models: Model[];
}

export function ModelSelector({ control, error, models }: ModelSelectorProps) {
    return (
        <Controller
            name="model"
            control={control}
            render={({ field }) => (
                <Select
                    {...field}
                    selectedKeys={field.value ? [field.value] : []}
                    onSelectionChange={(keys) => {
                        const modelName = Array.from(keys)[0]?.toString();
                        field.onChange(modelName);
                    }}
                    label="Modelo"
                    placeholder="Selecciona un modelo"
                    className="w-full"
                    isInvalid={!!error}
                    errorMessage={error?.message}
                    classNames={{
                        label: "text-gray-300",
                        trigger: "bg-gray-800/50 text-white border border-gray-700/50 hover:border-blue-500/50",
                        listbox: "bg-gray-800/90 text-white",
                    }}
                >
                    {models.map((model) => (
                        <SelectItem key={model.name} value={model.name}>
                            {model.name}
                        </SelectItem>
                    ))}
                </Select>
            )}
        />
    );
} 