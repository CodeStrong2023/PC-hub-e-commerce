"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>


            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-80 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  Quienes somos?
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Somos una tienda con más de 17 años dentro del rubro tecnológico en
                  Argentina. Nos dedicamos a la venta de computadoras, notebooks, hardware
                  y productos periféricos para consumidores particulares, empresas o
                  revendedores.
                  Marcas como Asus, SkullCandy, MSI, Gigabyte, Kingston, Intel o Nvidia
                  nos han hecho sus representantes oficiales
                  en el país.
                  En PCHub encontrarás todo lo que compone la PC de tus sueños.
                </p>
              </a>
            </NavigationMenuLink>

          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList;

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

