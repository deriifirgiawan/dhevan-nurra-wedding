import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const wishesFilePath = path.join(process.cwd(), "data", "wishes.json");

export async function GET() {
  const fileData = fs.readFileSync(wishesFilePath, "utf8");
  const wishes = JSON.parse(fileData);
  return NextResponse.json(wishes);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, message } = body;

  if (!name || !message) {
    return NextResponse.json(
      { error: "Name and message are required" },
      { status: 400 }
    );
  }

  const newWish = {
    name,
    message,
    createdAt: new Date().toISOString(),
  };

  // Baca file JSON
  const fileData = fs.readFileSync(wishesFilePath, "utf8");
  const wishes = JSON.parse(fileData);

  // Tambahkan wish baru
  wishes.push(newWish);

  // Simpan kembali ke file JSON
  fs.writeFileSync(wishesFilePath, JSON.stringify(wishes, null, 2));

  return NextResponse.json({ success: true, wish: newWish });
}
