import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient({
  accelerateUrl: "",
  log: [],
});

export default prisma;
