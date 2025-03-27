import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const DATABASE_NAME = 'lamasse';

export const decks = sqliteTable("decks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  color: text({ enum: ["value1", "value2"] }).notNull(),
  lastPlayedAt: integer('last_played_at', { mode: 'timestamp_ms' })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
  createdAt: integer('created_at', { mode: 'timestamp_ms' })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
});

export const cards = sqliteTable("cards", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  recto: text("recto").notNull(),
  verso: text("verso").notNull(),
  deckId: integer("deck_id")
    .notNull()
    .references(() => decks.id),
});

export type Deck = typeof decks.$inferSelect;
export type Card = typeof cards.$inferSelect;
