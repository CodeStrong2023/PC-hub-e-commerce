export function formatPrice(price: number) {
    const priceFormatted = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      currencyDisplay: 'symbol',
    });
  
    const finalPrice = priceFormatted.format(price);
    return finalPrice;
  }