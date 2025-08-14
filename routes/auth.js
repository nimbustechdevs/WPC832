import express from "express";
import { MongoClient } from "mongodb";

const router = express.Router();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.MONGODB_DB || "auth-app";

async function connectToDB() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  return { db, client };
}

// Signup route
router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  let db, client;
  try {
    ({ db, client } = await connectToDB());
    const user = await db.collection("users").findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    await db.collection("users").insertOne({ firstName, lastName, email, password });
    res.json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: "Database error", error: err.message });
  } finally {
    if (client) client.close();
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let db, client;
  try {
    ({ db, client } = await connectToDB());
    const user = await db.collection("users").findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Database error", error: err.message });
  } finally {
    if (client) client.close();
  }
});

export default router;