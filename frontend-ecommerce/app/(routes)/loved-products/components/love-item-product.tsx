"use client"
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
interface LoveItemsProductProps {
    product: ProductType
}
const LoveItemProduct = (props: LoveItemsProductProps) => {
    const { product } = props
    console.log(product)
    const router = useRouter()
    const { removeLovedItem } = useLovedProducts()
    const { addItem } = useCart()
    const addToCheckout =() =>{
        addItem(product)
        removeLovedItem(product.id)
    }

    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`product/${product.slug}`)}>
                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.imagenes[0].formats.small.url}`}
                    alt="product"
                    className="w-24 h-24 overflow-hidden rounded-md sm_w-auto sm:h-32" />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.NombreProducto}</h2>
                    <p className="font-bold">{formatPrice(product.precio)}</p>
                    <Button className="mt-5 rounded-full" onClick={()=>addToCheckout()}>Añadir al carrito</Button>
                </div>
            </div>
            <div className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition h-8")}>
                <X size={20} onClick={() => removeLovedItem(product.id)}></X>
            </div>
        </li>
    )
}

export default LoveItemProduct;