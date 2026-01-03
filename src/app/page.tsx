import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function app() {
  return (
    <main className="h-screen  flex items-center flex-col justify-center">

      <Card className="mt-5 w-1/2 ">

        <div className=" flex flex-row justify-center gap-1">
          <Input className="w-[40%]" placeholder="Adicionar tarefa" />
          <Button className="bg-blue-500" ><Plus />Adicionar</Button>
        </div>

        <Separator className="" orientation="horizontal" />

        <div className="flex flex-row items-start">
          <Badge />

        </div>

      </Card>

    </main>
  );
}