import { timestamp, text, pgTable, serial } from 'drizzle-orm/pg-core';

export const todo = pgTable('todo', {
  id: serial('id').primaryKey().notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  created_at: timestamp('created_at').defaultNow(),
});
