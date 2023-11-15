import { pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const userTable = pgTable("app_user", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").unique().notNull(),
  fullName: text("full_name").notNull(),
})
