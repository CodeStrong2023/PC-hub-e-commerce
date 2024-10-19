"use client"
import { useGetCategoryProducts } from "@/api/getCategoryProduct";
import {useParams, useRouter} from "next/navigation";
import { ResponseType } from "@/types/response"; 
import { Separator } from "@/components/ui/separator";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/product.card";
import { ProductType } from "@/types/product";


export default function page() {
    const params = useParams();
    const {categorySlug} = params;
    const {result, loading}: ResponseType = useGetCategoryProducts('arma-tu-pc')
    const router = useRouter ()

    return(
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading && (
                <h1 className="text-3x1 font-medium">Producto: {result[0].NombreProducto} </h1>
            ) }
            <Separator className="bg-gray-500 h-2" />

            <div className="sm-flex sm:justify-between">
                <FiltersControlsCategory />

                <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10">
                    {loading &&(
                        <SkeletonSchema grid={3}/>
                    )}
                    {result != null && !loading && (
                        result.map((product: ProductType) => (
                        <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>

            </div>
        </div>
    )

} 