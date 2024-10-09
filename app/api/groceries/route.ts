import { NextResponse } from 'next/server';
import { addGroceryItem, getGroceryItems } from '@/lib/groceries';

export async function GET() {
  const items = await getGroceryItems();
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const { name } = await request.json();
  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }
  const newItem = await addGroceryItem(name);
  return NextResponse.json(newItem, { status: 201 });
}