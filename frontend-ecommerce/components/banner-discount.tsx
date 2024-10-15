
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">Consigue hasta un -25% Off</h2>
            <h3 className="mt-3 font-semibold">-20% comprando mas de $100.000 o -25% comprando mas de $200.000</h3>

            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants({variant:'outline'})}>Comprar</Link>
                <Link href="#" className={buttonVariants({variant:'outline'})}>Mas informacion</Link>
            </div>
        </div>
    )
}

export default BannerDiscount;