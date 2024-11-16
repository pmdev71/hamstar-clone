import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { address, amount } = await request.json();
    const client = await clientPromise;
    const db = client.db("hamster");

    const result = await db.collection("users").updateOne(
      { address },
      { $inc: { coins: amount } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const updatedUser = await db.collection("users").findOne({ address });
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating coins:", error);
    return NextResponse.json(
      { error: "Failed to update coins" },
      { status: 500 }
    );
  }
}