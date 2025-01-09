"use client";

import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Card} from "@nextui-org/card";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Slider} from "@nextui-org/slider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Card className="p-6 w-[400px] bg-gray-900/60 border border-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-white">Convers-AR</h1>
        
        <div className="space-y-4">
          <Input
            label="Mensaje original"
            placeholder="Escribe tu mensaje aquí"
            className="w-full"
            classNames={{
              label: "text-gray-300",
              input: "bg-gray-800/50 text-white border-gray-700",
              inputWrapper: "border border-gray-700/50 hover:border-blue-500/50 group-data-[focused=true]:border-blue-500"
            }}
          />
          
          <div className="p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg min-h-[100px]">
            <p className="text-gray-300">
              {/* Aquí irá el texto traducido */}
              Este es un ejemplo de traducción
            </p>
          </div>

          <Button 
            color="primary"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Traducir
          </Button>

          <Accordion 
            variant="shadow"
            className="text-white"
          >
            <AccordionItem 
              key="1" 
              aria-label="Configuración avanzada" 
              title="Configuración avanzada"
              className="bg-gray-800/50 border border-gray-700/50 group-data-[hover=true]:border-gray-600"
            >
              <div className="flex flex-col gap-6 px-2">
                <div>
                  <p className="text-sm text-gray-300 mb-2">Temperatura</p>
                  <Slider 
                    size="sm"
                    step={0.1}
                    maxValue={1} 
                    minValue={0}
                    defaultValue={0.7}
                    className="max-w-md"
                    classNames={{
                      track: "bg-gray-700",
                      filler: "bg-blue-500",
                      thumb: "bg-white"
                    }}
                    aria-label="Temperatura"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-300 mb-2">Top P</p>
                  <Slider
                    size="sm"
                    step={0.1}
                    maxValue={1}
                    minValue={0}
                    defaultValue={0.9}
                    className="max-w-md"
                    classNames={{
                      track: "bg-gray-700",
                      filler: "bg-blue-500",
                      thumb: "bg-white"
                    }}
                    aria-label="Top P"
                  />
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </Card>
    </main>
  );
}

