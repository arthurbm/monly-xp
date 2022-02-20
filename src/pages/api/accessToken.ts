import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { authData } from 'utils/openBankingAuth';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axios.post(
      'https://openapi.xpi.com.br/oauth2/v1/access-token/',
      authData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'PostmanRuntime/7.26.8'
        }
      }
    );
    const token: string = data.access_token;

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
