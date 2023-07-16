import { create } from "zustand";

import React from "react";
import { useStoreModalTypes } from "@/types/type";

export const useStoreModal = create<useStoreModalTypes>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
