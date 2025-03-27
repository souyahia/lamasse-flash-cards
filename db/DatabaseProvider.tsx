import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import type { PropsWithChildren } from "react";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import migrations from "@/drizzle/migrations";

import { DATABASE_NAME } from "./schema";

export const DatabaseProvider = ({ children }: PropsWithChildren) => {
  const expoDb = openDatabaseSync(DATABASE_NAME);
  const db = drizzle(expoDb);
  const { error } = useMigrations(db, migrations);

  if (!error) {
    return <ErrorBoundary />;
  }

  return (
    <SQLiteProvider
      databaseName={DATABASE_NAME}
      options={{ enableChangeListener: true }}
      useSuspense
    >
      {children}
    </SQLiteProvider>
  );
};
