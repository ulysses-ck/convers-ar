import { Control, Controller, FieldError } from "react-hook-form";
import { Slider } from "@nextui-org/slider";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Input } from "@nextui-org/input";
import { TranslationFormData } from "@/schemas/translation-schema";

interface AdvancedSettingsProps {
    control: Control<TranslationFormData>;
    errors: {
        temperature?: FieldError;
        topP?: FieldError;
        apiKey?: FieldError;
        systemMessage?: FieldError;
    };
}

export function AdvancedSettings({ control, errors }: AdvancedSettingsProps) {
    return (
        <Accordion variant="bordered">
            <AccordionItem
                key="1"
                aria-label="Configuración avanzada"
                title="Configuración avanzada"
                className="bg-transparent border border-none"
                classNames={{
                    title: "text-gray-200",
                    trigger: "px-4 py-2 data-[hover=true]:bg-gray-700/50",
                    content: "text-gray-300"
                }}
            >
                <div className="flex flex-col gap-6 px-2">
                    <Controller
                        name="systemMessage"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                type="text"
                                label="Mensaje del sistema"
                                placeholder="Ingresa el mensaje del sistema"
                                className="max-w-md"
                                isInvalid={!!errors.systemMessage}
                                errorMessage={errors.systemMessage?.message}
                                classNames={{
                                    label: "text-gray-300",
                                    input: "bg-gray-800/50 text-white",
                                    inputWrapper: "border border-gray-700/50 hover:border-blue-500/50"
                                }}
                            />
                        )}
                    />

                    <Controller
                        name="apiKey"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                type="password"
                                label="API Key de Gemini"
                                placeholder="Ingresa tu API key"
                                className="max-w-md"
                                isInvalid={!!errors.apiKey}
                                errorMessage={errors.apiKey?.message}
                                classNames={{
                                    label: "text-gray-300",
                                    input: "bg-gray-800/50 text-white",
                                    inputWrapper: "border border-gray-700/50 hover:border-blue-500/50"
                                }}
                            />
                        )}
                    />

                    <Controller
                        name="temperature"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <div>
                                <p className="text-sm text-gray-300 mb-2">Temperatura: {value}</p>
                                <Slider
                                    size="sm"
                                    step={0.1}
                                    maxValue={1}
                                    minValue={0}
                                    value={value}
                                    onChange={onChange}
                                    className="max-w-md"
                                    classNames={{
                                        track: "bg-gray-700",
                                        filler: "bg-blue-500",
                                        thumb: "bg-white"
                                    }}
                                    aria-label="Temperatura"
                                />
                                {errors.temperature && (
                                    <p className="text-red-500 text-sm mt-1">{errors.temperature.message}</p>
                                )}
                            </div>
                        )}
                    />

                    <Controller
                        name="topP"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <div>
                                <p className="text-sm text-gray-300 mb-2">Top P: {value}</p>
                                <Slider
                                    size="sm"
                                    step={0.1}
                                    maxValue={1}
                                    minValue={0}
                                    value={value}
                                    onChange={onChange}
                                    className="max-w-md"
                                    classNames={{
                                        track: "bg-gray-700",
                                        filler: "bg-blue-500",
                                        thumb: "bg-white"
                                    }}
                                    aria-label="Top P"
                                />
                                {errors.topP && (
                                    <p className="text-red-500 text-sm mt-1">{errors.topP.message}</p>
                                )}
                            </div>
                        )}
                    />
                </div>
            </AccordionItem>
        </Accordion>
    );
} 