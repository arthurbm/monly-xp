import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, Db } from 'mongodb';
import { URL } from 'url';

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
  const { name } = req.body;

  const mongoDbURI = process.env.MONGODB_URI;

  if (!mongoDbURI) {
    return res
      .status(403)
      .json({ message: 'No credentials to connect to database' });
  }
  const db = await connectToDatabase(mongoDbURI);

  const collection = db.collection('users');

  await collection.insertOne({
    name,
    createdAt: new Date()
  });

  return res.status(201).json({ message: 'User created' });
};
