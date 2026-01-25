// prisma.config.ts
import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',           // or wherever your schema lives
  migrations: {
    path: 'prisma/migrations',
    // seed: 'tsx prisma/seed.ts',        // optional – uncomment if you use seeding
  },
  datasource: {
    url: env('DATABASE_URL'),               // ← moved here
    // shadowDatabaseUrl: env('SHADOW_DATABASE_URL'),  // optional
  },
})
