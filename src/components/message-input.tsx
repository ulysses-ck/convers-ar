import { Input } from "@nextui-org/input";

export function MessageInput() {
  return (
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
  );
} 