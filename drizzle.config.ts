import type { Config } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required.");
}

export default {
  schema: "./src/lib/drizzle/schema.ts",
  out: "./src/lib/drizzle/migrations",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  driver: "mysql2",
  breakpoints: true,
} satisfies Config;
