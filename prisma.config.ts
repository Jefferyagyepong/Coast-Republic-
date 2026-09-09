// prisma.config.ts
import "dotenv/config";
import path from "path";
import type { PrismaConfig } from "prisma";

export default {
  schema: path.join("prisma", "schema.prisma"),
} satisfies PrismaConfig;

