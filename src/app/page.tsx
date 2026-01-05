import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import {
  Plus,
  List,
  Circle,
  Check,
  SquarePen,
  Trash,
  Pointer,
  ListChecks,
  Sigma,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import EditTaskComponent from "@/components/homeComponents/edit_task";
import RemoveAllTasks from "@/components/homeComponents/remove_allTasks";

export default function app() {
  return (
    <main className="h-screen  flex items-center flex-col justify-center">
      <Card className="mt-5 w-1/2  ">
        <header className=" flex flex-row justify-center gap-2">
          <Input className="w-1/2" placeholder="Adicionar tarefa" />
          <Button className="bg-blue-500 h-8.75">
            <Plus />
            Adicionar
          </Button>
        </header>

        <div className="h-1 border-t w-[90%] ml-[5%] " />
        <CardContent>
          <div className="flex gap-1.25  flex-row max-md:flex-col max-md:duration-200 ">
            <Badge className=" cursor-pointer" variant="default">
              <List className="cursor-pointer " />
              Todas
            </Badge>
            <Badge className=" cursor-pointer" variant="outline">
              <Circle className="cursor-pointer" />
              Não completas
            </Badge>
            <Badge className=" cursor-pointer" variant="outline">
              <Check className="cursor-pointer" />
              completas
            </Badge>
          </div>

          {/* tasks */}

          <div className=" mt-4 border-b ">
            <div className=" flex items-center justify-between border-y h-12 ">
              <div className="h-full w-1 bg-gray-900 rounded-md "></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex gap-3">
                <EditTaskComponent />
                <Trash size={20} className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* foooter */}
          <div className="mt-[2%] flex justify-between items-center">
            <div className=" flex flex-row items-center gap-1">
              <ListChecks size={18} />
              <p className="text-sm">Tarefas concluídas(3/3)</p>
            </div>

            <RemoveAllTasks />
          </div>

          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div
              className="h-full  bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="w-full  flex justify-end mt-2">
            <div className="flex gap-2 items-center">
              <Sigma size={20} />
              <p className="text-sm">Somatório (1/3)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
