import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";
export default function app() {
  return (
    <main className="h-screen flex items-center flex-col justify-center">
      <h1 className="text-red-300 text-[20px]">Botão maneiro</h1>

      <div className=" flex flex-row gap-1">
        <Input className=" " placeholder="Email" />
        <Button >o botão</Button>
      </div>

    </main>
  );
}