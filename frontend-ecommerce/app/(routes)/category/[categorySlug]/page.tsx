"use client"
import { useGetCategoryProducts } from "@/api/getCategoryProduct";
import { useParams, useRouter } from "next/navigation";
import { ResponseType } from "@/types/response";
import { Result } from "postcss";
import { Separator } from "@/components/ui/separator";
import FilterControlsCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";
import FilterMarca from "./components/filter-marca";
import { Console } from "console";
import Link from "next/link";

export default function page() {
    const params = useParams();
    const { categorySlug } = params;
    const { result, loading }: ResponseType = useGetCategoryProducts(categorySlug);
    const [filterMarca, setFilterMarca] = useState('')
    const router = useRouter();

    const filteredProducts = result !== null && !loading && (
        filterMarca == '' ? result : result.filter((product: ProductType) => product.Marca === filterMarca)
    )
    console.log(filteredProducts)

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading && (
                <h1 className="text-3xl font-medium">{categorySlug}</h1>
            )}
            <Separator className="bg-gray-500 h-2" />

            <div className="sm:flex sm:justify-between">
                <FilterControlsCategory setFilterMarca={setFilterMarca} />

                <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3}></SkeletonSchema>
                    )}
                    {filteredProducts !== null && !loading && (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} router={undefined} />
                        ))
                    )}
                    {filteredProducts !== null && !loading && filteredProducts.length == 0 && (
                        <div className="p-4">
                            <div>

                            <p className="font-bold py-4 text-lg">No hay productos para mostrar para esta marca</p>
                            </div>
                            <Separator className="bg-gray-500 h-2 my-4 " />
                            <div>

                                <Link href="#" className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit"
                                    onClick={() => setFilterMarca('')}>
                                    Volver atrás
                                </Link>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div>
    )
}

