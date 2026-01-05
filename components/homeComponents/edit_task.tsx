import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";
import { SquarePen } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const editTaskComponent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SquarePen size={20} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Tarefa</DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-2">
              <Input className="text-black" placeholder="Estudar React" />
              <Button className="bg-blue-500">Editar</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default editTaskComponent;
