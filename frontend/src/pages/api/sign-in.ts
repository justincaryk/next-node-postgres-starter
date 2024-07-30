import { AuthAccountRequestBody, SigninResponsePayload } from '@/types';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function RegisterUser(
  req: NextApiRequest,
  res: NextApiResponse<SigninResponsePayload>,
) {
  if (req.method === 'POST') {
    try {
      const body = JSON.parse(req.body as string) as AuthAccountRequestBody;

      // only for testing purposes
      if (body.email === 'email@exists.com') {
        res.status(200).json({ code: 'ok' });
      }
      // only for testing purposes
      else if (body.email === 'email@no-exist.com') {
        res.status(200).json({ code: 'no user found' });
      } else {
        res.status(200).json({ code: 'invalid credentials' });
      }
    } catch (error) {
      res.status(400);
    }
  } else {
    res.status(404);
  }
}
