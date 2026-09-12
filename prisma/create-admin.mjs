// prisma/create-admin.mjs
// Run with: node prisma/create-admin.mjs your@email.com yourPassword123
import "dotenv/config";
import crypto from "crypto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const derivedKey = crypto.scryptSync(password, salt, 64);
  return `${salt}:${derivedKey.toString("hex")}`;
}

async function main() {
  const [, , email, password] = process.argv;

  if (!email || !password) {
    console.error("Usage: node prisma/create-admin.mjs <email> <password>");
    process.exit(1);
  }
  if (password.length < 8) {
    console.error("Password must be at least 8 characters.");
    process.exit(1);
  }

  const passwordHash = hashPassword(password);

  const admin = await prisma.admin.upsert({
    where: { email: email.trim().toLowerCase() },
    update: { passwordHash },
    create: { email: email.trim().toLowerCase(), passwordHash },
  });

  console.log(`✅ Admin ready: ${admin.email}`);
}

main()
  .catch((err) => {
    console.error("❌ Failed to create admin:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
