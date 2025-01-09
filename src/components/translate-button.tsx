import { Button } from "@nextui-org/button";

interface TranslateButtonProps {
    isLoading?: boolean;
}

export function TranslateButton({ isLoading }: TranslateButtonProps) {
    return (
        <Button 
            type="submit"
            color="primary"
            className="w-full"
            isLoading={isLoading}
        >
            {isLoading ? 'Traduciendo...' : 'Traducir'}
        </Button>
    );
} 