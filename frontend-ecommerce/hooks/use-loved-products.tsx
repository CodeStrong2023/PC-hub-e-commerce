"use client"
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';
import { ProductType } from "@/types/product";
import { toast } from "./use-toast";

interface UseLoveProductsType {
  lovedItems: ProductType[],
  addLoveItem: (data: ProductType) => void,
  removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(persist<UseLoveProductsType>((set, get) => ({
  lovedItems: [],
  addLoveItem: (data: ProductType) => {
    const currentLovedItems = get().lovedItems;
    const existingItem = currentLovedItems.find(item => item.id === data.id);
    
    if (existingItem) {
      toast({
        title: "El producto ya existe en la lista",
        variant: "destructive"
      });
      return;
    }
    set({
      lovedItems: [...get().lovedItems, data]
    });
    toast({
      title: "Producto añadido a la lista"
    });
  },
  removeLovedItem: (id: number) => {
    set({
      lovedItems: get().lovedItems.filter(item => item.id !== id)
    });
    toast({
      title: "Producto eliminado de la lista"
    });
  }
}), {
  name: "love-products-storage",
  storage: createJSONStorage(() => localStorage)
}));
