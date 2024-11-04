"use client"

import { useGetFeatureProducts } from "@/api/useGetFeatureProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import IconButton from "./icon-button";
import { useCart } from "@/hooks/use-cart";


const FeaturedProducts = () => {
    const { loading, result }: ResponseType = useGetFeatureProducts()
    const router = useRouter()
    const {addItem, items}= useCart()
    console.log(items)
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:ml-4">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )
                    }
                    {result !== null && (
                        result.map((product: ProductType) => {
                            const { slug, NombreProducto, id, Marca } = product
                            return (
                                <CarouselItem key={id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5group">
                                    <div className="p-1">
                                        <Card className="py-4 border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2 group">
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product?.imagenes[0]?.formats?.small?.url}`}
                                                    alt="Image featured"
                                                    className="w-full h-40 object-cover rounded-xl" />
                                                <div className="absolute w-full px-2 transition duration-200 opacity-0 group-hover:opacity-100 bottom-2">
                                                    <div className="flex justify-center gap-x-5">
                                                        <IconButton
                                                            onClick={() => router.push(`product/${slug}`)}
                                                            icon={<Expand size={20} />}
                                                            className="text-gray-600"
                                                        />
                                                        <IconButton
                                                            onClick={()=>addItem(product)}
                                                            icon={<ShoppingCart size={20} />}
                                                            className="text-gray-600"
                                                        />


                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className="flex justify-center gap-4 px-8">
                                                <h3 className="text-lg font-bold  overflow-hidden truncate">{NombreProducto}</h3>
                                            </div>
                                            <div className="flex justify-center gap-4 px-8">
                                                <div className="flex items-center justify-between gap-3">
                                                    <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{Marca}</p>
                                                </div>
                                            </div>

                                        </Card>
                                    </div>
                                </CarouselItem>)
                        })
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>

        </div>
    )
}

export default FeaturedProducts;