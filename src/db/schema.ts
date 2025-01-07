import { pgTable, serial, varchar, integer, text, timestamp, foreignKey } from 'drizzle-orm/pg-core';

// Define the customer table
export const customer = pgTable('customer', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
});

export const ticket = pgTable('ticket', {
  id: serial('id').primaryKey(),
  customerId: integer('customer_id').notNull(),
  issue: text('issue').notNull(),
  status: varchar('status', { length: 50 }).default('open').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => ({
  customerFk: foreignKey({
    columns: [table.customerId],
    foreignColumns: [customer.id],
  }),
}));
