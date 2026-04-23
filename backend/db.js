import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://gob:gobpassword@mmtthingy.hkzfkyc.mongodb.net/?appName=mmtthingy";
const client = new MongoClient(uri);

let db;

export async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db("mmtthingy"); // assuming the database name is mmtthingy
    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export function getDb() {
  if (!db) {
    throw new Error("Database not connected. Call connectToDatabase first.");
  }
  return db;
}

// Create collections if needed (optional, as they are created implicitly)
export async function createCollections() {
  const database = getDb();
  // Create users collection
  await database.createCollection("users");
  console.log("Collections created");
}
