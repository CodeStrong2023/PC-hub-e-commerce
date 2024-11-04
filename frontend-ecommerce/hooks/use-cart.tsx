
import { ProductType } from "@/types/product";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "./use-toast";


interface CartItem extends ProductType {
  quantity: number;
}

interface CartStore {
  items: CartItem[],
  addItem: (data: ProductType) => void,
  removeItem: (id: number) => void,
  removeAll: () => void
}

export const useCart = create(persist<CartStore>((set, get) => ({
  items: [],
  addItem: (data: ProductType) => {
    const currentItems = get().items;
    const existingItem = currentItems.find(item => item.id === data.id);

    if (existingItem) {
      set({
        items: currentItems.map(item =>
          item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      });
    } else {
      set({
        items: [...get().items, { ...data, quantity: 1 }]
      });
      toast({ title: "Producto añadido al carrito " });
    }
  },
  removeItem: (id: number) => {
    set({ items: get().items.filter(item => item.id !== id) });
    toast({ title: "Producto eliminado del carrito " });
  },
  removeAll: () => set({ items: [] })
}), {
  name: "cart-storage",
  storage: createJSONStorage(() => localStorage)
}));
