import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, Db, Collection } from 'mongodb';
import { URL } from 'url';
import { Objective } from '../../contexts/objectiveContext';

let cachedDb: Db | null = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(uri);

  const dbName = new URL(uri).pathname.substring(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const mongoDbURI = process.env.MONGODB_URI;

  if (!mongoDbURI) {
    return res
      .status(403)
      .json({ message: 'No credentials to connect to database' });
  }
  const db = await connectToDatabase(mongoDbURI);

  const collection = await db.collection('objectives').find({});

  return res.status(200).json({ collection });
};
