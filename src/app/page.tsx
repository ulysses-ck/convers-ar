import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Card} from "@nextui-org/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <Card className="p-6 w-[400px] bg-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-white">Traductor</h1>
        
        <div className="space-y-4">
          <Input
            label="Mensaje original"
            placeholder="Escribe tu mensaje aquí"
            className="w-full"
            classNames={{
              label: "text-gray-300",
              input: "bg-gray-700 text-white"
            }}
          />
          
          <div className="p-4 bg-gray-700 rounded-lg min-h-[100px]">
            <p className="text-gray-300">
              {/* Aquí irá el texto traducido */}
              Este es un ejemplo de traducción
            </p>
          </div>

          <Button 
            color="primary"
            className="w-full"
          >
            Traducir
          </Button>
        </div>
      </Card>
    </main>
  );
}

