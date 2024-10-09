import { getGroceryItems } from '@/lib/groceries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function GroceryList() {
  const groceryItems = await getGroceryItems();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grocery List</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {groceryItems.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <span>{item.name}</span>
              <span className="text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}