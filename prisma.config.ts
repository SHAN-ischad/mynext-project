// prisma.config.ts
import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// Carrega o .env explicitamente
config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
