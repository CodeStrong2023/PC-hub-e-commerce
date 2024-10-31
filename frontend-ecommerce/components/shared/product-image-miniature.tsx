import { useRouter } from "next/navigation";



interface ProductImageMiniatureProps {
    slug: string,
    url: string
}
const ProductImageMiniature = (props: ProductImageMiniatureProps) => {
    const { slug, url} = props
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/product/${product.attributes.slug}`)} className="curso-pointer">
                <img 
                src={`{${process.env.NEXT_PUBLIC_BACKEND_URL}}${product.attributes.images.data[0].attributes.url}`}
                alt="Product"
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />

            </div>
    );
}

export default ProductImageMiniature;