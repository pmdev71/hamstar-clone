import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { address, referralCode } = await request.json();
    const client = await clientPromise;
    const db = client.db("hamster");

    // Check if user exists
    const existingUser = await db.collection("users").findOne({ address });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Check referral and award bonus
    let initialCoins = 0;
    if (referralCode) {
      const referrer = await db.collection("users").findOne({ referralCode });
      if (referrer) {
        initialCoins = 10;
        await db.collection("users").updateOne(
          { address: referrer.address },
          { $inc: { coins: 10 } }
        );
      }
    }

    // Create new user
    const newUser = {
      address,
      coins: initialCoins,
      referralCode: `REF_${Date.now()}`,
      createdAt: new Date(),
    };

    await db.collection("users").insertOne(newUser);

    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const address = searchParams.get("address");

    if (!address) {
      return NextResponse.json(
        { error: "Address is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("hamster");
    
    const user = await db.collection("users").findOne({ address });
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}