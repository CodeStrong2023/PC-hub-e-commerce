import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
  product: ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
  const { product } = props
  const router = useRouter()
  const { removeLovedItem } = useLovedProducts()
  const { addItem } = useCart()
  const addToCheckout = () => {
    addItem(product)
    removeLovedItem(product.id)
  }


  return (
    <li className="flex p-6 border-b">
      <ProductImageMiniature slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url} />
        <div className="flex justify-between flex-1 px-6">
            <div>
                <div>
                    <h2 className="flex-lg font-bold">{product.attributes.productName}</h2>
                    <p className="font-bold">{formatPrice(product.attributes.price)}</p>

                    <ProductTasteOrigin origin={product.attributes.origin} taste={product.attributes.taste} />

                    <button className="mt-5 rounded-full" onClick={addToCheckout}>Añadir al carrito</button>
                </div>

                <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}></button>
                    <X size={20} onClick={() => removeLovedItem(product.id)} />
            </div>

        </div>
    </li>
  );
};

export default LovedItemProduct;