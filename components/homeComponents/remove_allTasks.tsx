import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { Tasks } from "@/src/generated/prisma";
import { deleteCompleted } from "@/src/actions/clear_all_tasks";


type RemoveAllTasksProps = {
  taskList: Tasks[];
  loadTasks: () => void
};

const handleDeletedComplet = () => {
  deleteCompleted()
}

const RemoveAllTasks = ({ taskList, loadTasks }: RemoveAllTasksProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className=" h-6 flex justify-center items-center gap-2"
        >
          <Trash size={15} />
          Limpar tarefas concluídas
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja excluir ({taskList.filter(task => task.isCompleted).length}) itens
          </AlertDialogTitle>
          <AlertDialogDescription>
            Ao confirmar você deletará{"\n"} todas as tasks completas.Tem certeza?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Sair</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              handleDeletedComplet()
              loadTasks()
            }}
            className="cursor-pointer"
          >Excluir</AlertDialogAction>

        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveAllTasks;
