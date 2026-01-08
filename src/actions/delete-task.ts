"use server";
import prisma from "@/src/utils/prisma";

const deleteTask = async (id: string) => {
  try {
    if (!id) return;
    const deletedTask = await prisma.tasks.delete({
      where: {
        id: id,
      },
    });
    if (!deletedTask) return;
    return deletedTask;
  } catch (error) {
    throw error;
  }
};

export default deleteTask;
