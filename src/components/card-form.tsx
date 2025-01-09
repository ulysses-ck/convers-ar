"use client";

import { Card } from "@nextui-org/card";
import { useState } from "react";
import { Header } from "@/components/header";
import { MessageInput } from "@/components/message-input";
import { TranslationOutput } from "@/components/translation-output";
import { TranslateButton } from "@/components/translate-button";
import { AdvancedSettings } from "@/components/advanced-settings";

export default function CardForm() {

    const [temperature, setTemperature] = useState(0.7);
    const [topP, setTopP] = useState(0.9);

    const handleTemperatureChange = (value: number | number[]): void => {
        setTemperature(value as number);
    };

    const handleTopPChange = (value: number | number[]): void => {
        setTopP(value as number);
    };

    return (
        <Card className="p-6 w-[400px] bg-gray-900/60 border border-gray-800">
            <Header />
            <div className="space-y-4">
                <MessageInput />
                <TranslationOutput />
                <TranslateButton />
                <AdvancedSettings
                    temperature={temperature}
                    topP={topP}
                    onTemperatureChange={handleTemperatureChange}
                    onTopPChange={handleTopPChange}
                />
            </div>
        </Card>
    )
}