import prisma from "@/src/utils/prisma";

const getTasks = async () => {
  const tasks = await prisma.tasks.findMany();
  if (!tasks) return;

  console.log(tasks);
  return tasks;
};
