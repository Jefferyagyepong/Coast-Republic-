import "dotenv/config";
import { definePrismaConfig } from "prisma/config";

export default definePrismaConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
  skills: {
    agents: ["claude", "cursor", "agents", "devin"],
  },
});
