import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct=()=>{
    return(
        <>
        <div className="mt-4 text-center">
            <p className="my-2 text-lg">A un paso de la pc que siempre quisiste</p>
            <h4 className="mt-2 text-5xl font-extrabold upperce">Adquirila Ahora</h4>
            <p className="my-2 text-lg">la velocidad es poder</p>
            <Link href="#" className={buttonVariants()}>Comprar</Link>
        </div>
        <div className="h-[350px] bg-cover lg:h-[650px] bg-[url('/fondo-banner.jpg')] bg-center mt-5"></div>
        </>
    )
}

export default BannerProduct;