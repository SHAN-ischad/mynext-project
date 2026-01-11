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
import { Tasks } from "@/src/generated/prisma";
import { useState } from "react";
import { toast } from "sonner";
import editTask from "@/src/actions/edit-task";
import { DialogClose } from "@radix-ui/react-dialog";

type TasksProps = {
  task: Tasks;
  loadTasks: () => void;
};

const EditTaskComponent = ({ task, loadTasks }: TasksProps) => {
  const [editedTask, setEditedTask] = useState(task.task);
  const [isOpen, setIsOpen] = useState(false);

  const handleEditTask = async () => {
    try {
      if (editedTask !== task.task || editTask.length > 0) {
        toast.success("Tarefa editada");
      } else {
        toast.warning("Altere a tarefa antes de salvar");
        return;
      }
      if (editTask) {
        await editTask({ idTask: task.id, task: editedTask });
        loadTasks();
        setIsOpen(false);
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <SquarePen size={20} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-1">Editar Tarefa</DialogTitle>
          <div className="flex items-center gap-2">
            <Input
              className="text-black"
              placeholder="Estudar React"
              value={editedTask}
              onChange={(e) => {
                setEditedTask(e.target.value);
              }}
            />

            <Button className="bg-blue-500" onClick={handleEditTask}>
              Editar
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default EditTaskComponent;
