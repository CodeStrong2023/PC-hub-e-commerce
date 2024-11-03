import { NextApiRequest, NextApiResponse } from 'next';
import { Preference, MercadoPagoConfig } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: 'TEST-3755708515207387-091111-e4ec628606559989aa8eff51e80f9405-253493776',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const body = {
        items: req.body.items,
        back_urls: {
          success: 'http://localhost:3000/success',
          failure: 'http://localhost:3000/failure',
          pending: 'http://localhost:3000/pending',
        },
        payout_method: 'credit_card',
        auto_return: 'approved',
      };

      const preference = new Preference(client);

      const result = await preference.create({ body });
      console.log(result)

      res.json({ id: result.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear la preferencia' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}