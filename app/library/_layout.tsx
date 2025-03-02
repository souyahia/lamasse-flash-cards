import { Slot } from "expo-router";

import { LibraryHeader } from "@/module/Deck/pages/LibraryHeader/LibraryHeader";

export default function LibraryLayout() {
  return (
    <>
      <LibraryHeader />
      <Slot />
    </>
  );
}
