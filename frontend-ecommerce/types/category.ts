import { cn } from '@/lib/utils';
export type CategoryType = {
    id: number;
    categoriaNombre: string;
    slug:string;
    imagenesCategoria: {
      url:string;
    };
  };