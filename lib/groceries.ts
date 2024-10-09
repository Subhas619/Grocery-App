import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'groceries.json');

export interface GroceryItem {
  id: string;
  name: string;
  createdAt: string;
}

export async function getGroceryItems(): Promise<GroceryItem[]> {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading grocery items:', error);
    return [];
  }
}

export async function addGroceryItem(name: string): Promise<GroceryItem> {
  const items = await getGroceryItems();
  const newItem: GroceryItem = {
    id: Date.now().toString(),
    name,
    createdAt: new Date().toISOString(),
  };
  items.push(newItem);
  await fs.writeFile(dataFilePath, JSON.stringify(items, null, 2));
  return newItem;
}