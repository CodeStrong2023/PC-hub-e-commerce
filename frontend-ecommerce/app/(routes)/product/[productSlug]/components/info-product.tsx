import { ProductType } from "@/types/product";

export type InfoProductProps = {
    product: ProductType;
}


const InfoProduct = (props: InfoProductProps) => {
    const {product} = props;

    return (
        <div className="px-6">
            <div>
                <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl">{product.attributes.name}</h1>
                <div className="flex items-center justify-between gap-3">
                    <p className="px-2 py-1 text-cs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                        {product.attributes.taste}
                    </p>
                    <p className="px-2 py-1 text-xs bg-yellow-900 rounded-full w-fit">
                        {product.attributes.origin}
                    </p>
                </div>
            </div>
            <Separator className="my-4"/>
            <p>{product.attributes.description}</p>
            <Separator className="my-4"/>
            <p className="my-4 text-2xl">{formatPrice(product.attributes.price)}</p>
            <div className="flex items-center gap-5">
                <Button className="w-full " onClick={() => console.log{"Comprar"}}>Comprar </Button>
                <Heart width={30} strokeWidth={1} className="transition duration-300 cursor-pointer hover:fill-black"
                 onClick={() => console.log("Añadir a favoritos")} />
            </div>
        </div>
    )
}

export default InfoProduct;
