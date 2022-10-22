import { MongoClient } from "mongodb";

const uri = process.env.DB as string;

if (!process.env.DB) {
	throw new Error("Please add your Mongo URI to .env.local");
}

const client = new MongoClient(uri),
	clientPromise = client.connect();

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;