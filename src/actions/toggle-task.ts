"use server";

import prisma from "../utils/prisma";

export const updateTaskStatus = async (taskId: string) => {
  try {
    const currentTask = await prisma.tasks.findUnique({
      where: {
        id: taskId,
      },
    });
    if (!currentTask) return;

    const updatedStatus = await prisma.tasks.update({
      where: {
        id: taskId,
      },
      data: {
        isCompleted: !currentTask.isCompleted,
      },
    });
    if (!updatedStatus) return;
    return updatedStatus;
  } catch (error) {
    throw error;
  }
};
