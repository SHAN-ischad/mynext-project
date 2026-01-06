"use server";
import prisma from "@/src/utils/prisma";

export async function getTasks() {
  try {
    const tasks = await prisma.tasks.findMany();
    return tasks;
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    return [];
  }
}
