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
import { generateTranslation } from "@/server/actions/generate-content";

export default function CardForm() {
    const [models, setModels] = useState<Model[]>([]);
    const [translation, setTranslation] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
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
        setIsLoading(true);
        setError(null);
        try {
            const result = await generateTranslation(data);
            if (result.success) {
                setTranslation(result.content || '');
            } else {
                setError(result.error || null);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="p-4 w-full max-w-[95%] mx-auto bg-gray-900/60 border border-gray-800 sm:max-w-[400px]">
            <Header />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <MessageInput control={control} error={errors.message} />
                <TranslationOutput 
                    content={translation}
                    isLoading={isLoading}
                    error={error}
                />
                <TranslateButton isLoading={isLoading} />
                <AdvancedSettings
                    control={control}
                    errors={{
                        temperature: errors.temperature,
                        topP: errors.topP,
                        apiKey: errors.apiKey,
                        systemMessage: errors.systemMessage
                    }}
                />
                <Suspense fallback={<div className="text-center text-sm text-gray-400">Cargando modelos...</div>}>
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