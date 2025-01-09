import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Slider } from "@nextui-org/slider";

interface AdvancedSettingsProps {
  temperature: number;
  topP: number;
  onTemperatureChange: (value: number | number[]) => void;
  onTopPChange: (value: number | number[]) => void;
}

export function AdvancedSettings({
  temperature,
  topP,
  onTemperatureChange,
  onTopPChange
}: AdvancedSettingsProps) {
  return (
    <Accordion variant="bordered">
      <AccordionItem 
        key="1" 
        aria-label="Configuración avanzada" 
        title="Configuración avanzada"
        className="bg-transparent border border-none"
        classNames={{
          title: "text-gray-200",
          trigger: "px-4 py-2 data-[hover=true]:bg-gray-700/50",
          content: "text-gray-300"
        }}
      >
        <div className="flex flex-col gap-6 px-2">
          <div>
            <p className="text-sm text-gray-300 mb-2">Temperatura: {temperature}</p>
            <Slider 
              size="sm"
              step={0.1}
              maxValue={1} 
              minValue={0}
              defaultValue={0.7}
              value={temperature}
              onChange={onTemperatureChange}
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
            <p className="text-sm text-gray-300 mb-2">Top P: {topP}</p>
            <Slider
              size="sm"
              step={0.1}
              maxValue={1}
              minValue={0}
              defaultValue={0.9}
              value={topP}
              onChange={onTopPChange}
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
  );
} 