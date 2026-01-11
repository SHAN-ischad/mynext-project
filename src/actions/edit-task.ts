"use server";
import prisma from "@/src/utils/prisma";

type editTaskProps = {
  idTask: string;
  task: string;
};

const editTask = async ({ idTask, task }: editTaskProps) => {
  try {
    if (!idTask || !task) return;

    const editedTask = await prisma.tasks.update({
      where: { id: idTask },
      data: { task: task },
    });

    if (!editedTask) return;
  } catch (error) {
    throw error;
  }
};

export default editTask;
