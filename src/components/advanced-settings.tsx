import { Control, Controller, FieldError } from "react-hook-form";
import { Slider } from "@nextui-org/slider";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { TranslationFormData } from "@/schemas/translation-schema";

interface AdvancedSettingsProps {
    control: Control<TranslationFormData>;
    errors: {
        temperature?: FieldError;
        topP?: FieldError;
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