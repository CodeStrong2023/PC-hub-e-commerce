"use client"
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { Separator } from "@radix-ui/react-separator";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

import axios from 'axios'
import { title } from 'process';
import CartItem from './componenet/cart-item';
const YOUR_PUBLIC_KEY = `${process.env.NEXT_PUBLIC_MP_KEY}`;



export default function Page() {
    initMercadoPago(YOUR_PUBLIC_KEY,{locale: "es-AR"});
    const [preferenceId, setPreferenceId] = useState(null)
    const { items } = useCart();
    const precios = items.map(product => product.precio);
    const totalPrecio = precios.reduce((total, precio) => total + precio, 0);
    console.log(items)
    const handleBuy = async () => {
      console.log("Intentando iniciar la compra...");
      try {
        const id = await createPreference();
        if (id) {
          console.log("Preference ID recibido:", id);
          setPreferenceId(id);
        } else {
          console.error("No se recibió un Preference ID");
        }
      } catch (error) {
        console.error("Error al manejar la compra:", error);
      }
    };
    
    const createPreference = async () => {
      try {
        const itemsToSend = items.map(item => ({
          title: item.NombreProducto,
          unit_price: item.precio,
          quantity: 1,
        }));
        const response = await axios.post('http://localhost:3000/api/create_preference', {
          items: itemsToSend,
        });
        console.log('Respuesta completa:', response);
        const { id } = response.data;
        return id;
      } catch (error) {
        console.error('Error creando preferencia:', error);
        throw new Error('Error al crear la preferencia de pago');
      }
    };

    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <h1 className="mb-5 text-3xl font-bold">Shopping cart</h1>
            <div className="grid sm:grid-cols-2 sm:gap-5">
                <div>
                    {items.length === 0 && <p>No hay productos</p>}
                    <ul>
                        {items.map(item => (
                            <CartItem key={item.id} product={item} />
                        ))}
                    </ul>
                </div>
                <div className="max-w-xl">
                    <div className="p-6 rounded-lg bg-slate-100">
                        <p className="mb-3 text-lg font-semibold">Orden de sumario</p>
                        <Separator className="bg-gray-500 h-2 my-4" />
                        <div className="flex justify-between gap-5 my-4">
                            <p>Total de la orden</p>
                            <p>{formatPrice(totalPrecio)}</p>
                        </div>
                        <div>
                            <Button className="w-full" onClick={handleBuy}>Comprar</Button>
                        </div>
                        {/* Contenedor para el botón de pago */}
                        {preferenceId && 
                        <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
