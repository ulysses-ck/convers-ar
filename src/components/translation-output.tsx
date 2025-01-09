import { Card } from "@nextui-org/card";

interface TranslationOutputProps {
    content?: string;
    isLoading?: boolean;
    error?: string | null;
}

export function TranslationOutput({ content, isLoading, error }: TranslationOutputProps) {
    return (
        <Card className="p-4 min-h-[100px] bg-gray-800/50">
            {isLoading ? (
                <div className="text-gray-400">Generando traducción...</div>
            ) : error ? (
                <div className="text-red-500">{error}</div>
            ) : content ? (
                <div className="text-white whitespace-pre-wrap">{content}</div>
            ) : (
                <div className="text-gray-400">La traducción aparecerá aquí</div>
            )}
        </Card>
    );
} 