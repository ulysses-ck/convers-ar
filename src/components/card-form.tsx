"use client";

import { Card } from "@nextui-org/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/header";
import { MessageInput } from "@/components/message-input";
import { TranslationOutput } from "@/components/translation-output";
import { TranslateButton } from "@/components/translate-button";
import { AdvancedSettings } from "@/components/advanced-settings";
import { translationSchema, TranslationFormData } from "@/schemas/translation-schema";

export default function CardForm() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<TranslationFormData>({
        resolver: zodResolver(translationSchema),
        defaultValues: {
            message: "",
            temperature: 0.7,
            topP: 0.9,
            apiKey: ""
        },
    });

    const onSubmit = (data: TranslationFormData) => {
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
                    }}
                />
            </form>
        </Card>
    );
}