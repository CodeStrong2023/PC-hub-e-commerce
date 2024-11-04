import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuLink } from "./ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [

    {
        title: "Armá tu PC",
        href: "http://localhost:3000/category/arma-tu-pc",
        description: "Explora nuestra guía personalizada y selecciona cada componente para armar la PC de tus sueños con total libertad y compatibilidad garantizada.",
    },
    {
        title: "PC Armadas",
        href: "http://localhost:3000/category/pc-armadas",
        description: "Descubre nuestra amplia gama de PC de escritorio preconfiguradas, listas para ofrecerte el mejor rendimiento según tus necesidades.",
    },
    {
        title: "Hardware",
        href: "http://localhost:3000/category/hardware",
        description: "Encuentra los mejores componentes de hardware para optimizar y actualizar el rendimiento de tu computadora.",
    },
    {
        title: "Periféricos",
        href: "http://localhost:3000/category/perifericos",
        description: "Completa tu experiencia con una variedad de periféricos esenciales, desde teclados y ratones hasta auriculares y más.",
    },
    {
        title: "Notebooks",
        href: "http://localhost:3000/category/notebooks",
        description: "Explora nuestra selección de notebooks diseñadas para brindarte portabilidad, potencia y rendimiento en cualquier lugar.",
    },
    {
        title: "Monitores",
        href: "http://localhost:3000/category/monitores",
        description: "Elige entre una variedad de monitores de alta calidad para disfrutar de la mejor experiencia visual, ya sea para gaming o trabajo.",
    },

]
const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                        <NavigationMenu>

                            <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                            >
                                {component.description}
                            </ListItem>
                        </NavigationMenu>
                    ))}
                </ul>
            </PopoverContent>
        </Popover>
    );
}
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default ItemsMenuMobile;