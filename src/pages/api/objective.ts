import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, Db } from 'mongodb';
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
  const objective: Objective = req.body;

  const mongoDbURI = process.env.MONGODB_URI;

  if (!mongoDbURI) {
    return res
      .status(403)
      .json({ message: 'No credentials to connect to database' });
  }
  const db = await connectToDatabase(mongoDbURI);

  const collection = db.collection('objectives');

  await collection.insertOne({
    ...objective,
    createdAt: new Date()
  });

  return res
    .status(201)
    .json({ message: 'Objective created', data: objective });
};
