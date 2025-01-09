"use client";

import { Card } from "@nextui-org/card";
import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/header";
import { MessageInput } from "@/components/message-input";
import { TranslationOutput } from "@/components/translation-output";
import { TranslateButton } from "@/components/translate-button";
import { AdvancedSettings } from "@/components/advanced-settings";
import { ModelSelector } from "@/components/model-selector";
import { translationSchema, TranslationFormData } from "@/schemas/translation-schema";
import { Suspense, useEffect, useState } from "react";
import { Model } from "@/types/gemini";
import { listModels } from "@/service/gemini";

export default function CardForm() {
    const [models, setModels] = useState<Model[]>([]);
    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<TranslationFormData>({
        resolver: zodResolver(translationSchema),
        defaultValues: {
            message: "",
            temperature: 0.7,
            topP: 0.9,
            apiKey: "",
            systemMessage: "Convertí el mensaje en un mensaje corporativo y políticamente correcto."
        },
        mode: "onChange"
    });

    const apiKey = watch("apiKey");

    useEffect(() => {
        const fetchModels = async () => {
            if (apiKey) {
                try {
                    const modelList = await listModels(apiKey);
                    setModels(modelList);
                } catch (error) {
                    console.error('Error al cargar los modelos:', error);
                }
            }
        };

        fetchModels();
    }, [apiKey]);

    const onSubmit = async (data: TranslationFormData) => {
        console.log(data);
    };

    return (
        <Card className="p-6 w-[400px] bg-gray-900/60 border border-gray-800">
            <Header />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <MessageInput control={control} error={errors.message} />
                <TranslationOutput />
                <TranslateButton />
                <AdvancedSettings
                    control={control}
                    errors={{
                        temperature: errors.temperature,
                        topP: errors.topP,
                        apiKey: errors.apiKey,
                        systemMessage: errors.systemMessage
                    }}
                />
                <Suspense fallback={<div>Cargando modelos...</div>}>
                    {apiKey && models.length > 0 && (
                        <ModelSelector 
                            control={control}
                            error={errors.model as FieldError}
                            models={models}
                        />
                    )}
                </Suspense>
            </form>
        </Card>
    );
}