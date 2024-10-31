import ProductImageMiniature from "@/components/shared/product-image-miniature";
import { useCart } from "@/hooks/use-cart";
import { ProductType } from "@/types/product";
import { useRouter } from "@next/navigation";

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const { product } = props
    const router = useRouter()
    const { removeItem } = useCart()

    return (
        <li className="flex py-6 border-b">
            <ProductImageMiniature slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url} />
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.attributes.productName}</h2>
                    <p className="font-bold">{formatPrice(product.attributes.price)}</p>
                    
                    <ProductTasteOrigin origin={product.attributes.origin} taste={product.attributes.taste} />
                </div>
                <div>
                    <button 
                            className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")} 
                        >
                            <X size={20} onClick={() => removeItem(product.id)} />

                    </button>
                </div>
            </div>
        </li>
    );
}

export default CartItem;