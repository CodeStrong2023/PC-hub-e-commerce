import { ProductType } from "@/types/product";

type ProductCardProps = {
    product: ProductType
} 

const ProductCard = (props: ProductCardProps) => {
    const {product} = props
    return(
        <Link href={`/product/${product.attributes.slug}`}
        className= "relative p-2 transitione-all duration-100 rounded-lg hover:shadow-md">
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{product.attributes.taste}</p>
                <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full dark:bg-white dark:text-black w-fit">{product.attributes.origin}</p>

            </div>

        </Link>
     );
}

export default ProductCard;
