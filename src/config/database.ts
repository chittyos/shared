export const databaseConfig = {
  providers: {
    neon: {
      name: 'Neon',
      url: process.env.DATABASE_URL,
      ssl: true,
    },
    postgresql: {
      name: 'PostgreSQL',
      url: process.env.DATABASE_URL,
      ssl: false,
    }
  }
} as const;