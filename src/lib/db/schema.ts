import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).unique(),
  github: varchar("github", { length: 255 }).unique(),
});
