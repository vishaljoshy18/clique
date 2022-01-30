// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { writeToDb, readFromCollection } from '@firebase/firestoreReadWrite';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const interests = await readFromCollection('interests');
        res.status(200).json({ interests });
      } catch (err) {
        console.log(err);
      }
      break;
    case 'POST':
      try {
        const response = await writeToDb(req.body);
        res.status(200).json({ response });
      } catch (err) {
        console.log(err);
      }
      break;
  }
}
