// lib/prisma.js
// Prevents creating a new PrismaClient on every hot-reload in dev,
// which otherwise exhausts your Neon connection pool.
import { PrismaClient } from "@prisma/client";

/** @type {import("@prisma/client").PrismaClient} */
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
