import { Card } from "@nextui-org/card";

interface TranslationOutputProps {
    content?: string;
    isLoading?: boolean;
    error?: string | null;
}

export function TranslationOutput({ content, isLoading, error }: TranslationOutputProps) {
    return (
        <Card className="p-3 sm:p-4 min-h-[100px] bg-gray-800/50 w-full">
            {isLoading ? (
                <div className="text-gray-400 text-sm sm:text-base">Generando traducción...</div>
            ) : error ? (
                <div className="text-red-500 text-sm sm:text-base">{error}</div>
            ) : content ? (
                <div className="text-white whitespace-pre-wrap text-sm sm:text-base">{content}</div>
            ) : (
                <div className="text-gray-400 text-sm sm:text-base">La traducción aparecerá aquí</div>
            )}
        </Card>
    );
} 