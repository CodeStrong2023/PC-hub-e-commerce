import IconButton from "@/components/icon-button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { start } from "repl";


type ProductCardProps = {
    product: ProductType
    router: any
}

const ProductCard = (props: ProductCardProps) =>{
    const {product, router} = props
    console.log(product)
    return(
        <Link href={`/product/${product.slug}`} 
        className="relative p-3 transition-all duration-100 rounded-lg hover:shadown-md">
            <div className="absolute flex items-center justify between gap-3 px-2 z-[1] top-4">   
            </div>
            <Carousel
            opts={{
                align: "start"
            }}
            className="w-full max-w-sm"
            >
                <CarouselContent>
                    {product.imagenes.map((image)=>(
                        
                        <CarouselItem key={image.id} className="group">
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image?.formats?.small?.url}`}
                            alt="Image"
                            className="w-full h-48 object-cover rounded-xl"/>
                            <div className="absolute w-full px-6 transitions duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                    <IconButton onClick={()=>router.push(`product/${product.slug}`)} icon={<Expand size={20} className="text-gray-600"/>}/>
                                    <IconButton onClick={()=>console.log({product})} icon={<ShoppingCart size={20} className="text-gray-600"/>}/>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <p>{product.NombreProducto}</p>
            <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{formatPrice(product.precio)}</p>
        </Link>
    )
}
export default ProductCard;