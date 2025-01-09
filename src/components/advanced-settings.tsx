import { Control, Controller, FieldError } from "react-hook-form";
import { Slider } from "@nextui-org/slider";
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
        <div className="space-y-4">
            <Controller
                name="temperature"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <div>
                        <Slider
                            label="Temperatura"
                            step={0.1}
                            maxValue={1}
                            minValue={0}
                            value={value}
                            onChange={onChange}
                            className="max-w-md"
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
                        <Slider
                            label="Top P"
                            step={0.1}
                            maxValue={1}
                            minValue={0}
                            value={value}
                            onChange={onChange}
                            className="max-w-md"
                        />
                        {errors.topP && (
                            <p className="text-red-500 text-sm mt-1">{errors.topP.message}</p>
                        )}
                    </div>
                )}
            />
        </div>
    );
} 