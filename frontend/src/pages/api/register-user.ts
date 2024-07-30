import { AuthAccountRequestBody, RegisterAccountResponsePayload } from '@/types';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function RegisterUser(
  req: NextApiRequest,
  res: NextApiResponse<RegisterAccountResponsePayload>,
) {
  if (req.method === 'POST') {
    try {
      const body = JSON.parse(req.body as string) as AuthAccountRequestBody;

      // only for testing purposes
      if (body.email === 'email@exists.com') {
        res.status(200).json({ code: 'email in use' });
      } else {
        res.status(200).json({ code: 'ok' });
      }
    } catch (error) {
      res.status(400);
    }
  } else {
    res.status(404);
  }
}
