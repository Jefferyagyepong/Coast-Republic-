import path from 'path'
import type { PrismaConfig } from 'prisma'

export default {
  earlyAccess: true,
  schema: path.join('prisma', 'schema.prisma'),
  migrate: {
    adapter: async () => {
      const { PrismaPg } = await import('@prisma/adapter-pg')
      const { Pool } = await import('pg')

      const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
      })

      return new PrismaPg(pool)
    },
  },
} satisfies PrismaConfig