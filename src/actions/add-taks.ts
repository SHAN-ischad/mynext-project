"use server";
import prisma from "@/src/utils/prisma";

const newTask = async (tarefa: string) => {
  try {
    if (!tarefa) return;

    const newTask = await prisma.tasks.create({
      data: {
        task: tarefa,
        isCompleted: false,
      },
    });
    if (!newTask) return;

    return newTask;
  } catch (error) {
    throw error;
  }
};

export default newTask;
