import GroceryList from '@/components/GroceryList';
import AddGroceryItem from '@/components/AddGroceryItem';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Grocery Tracking App</h1>
      <AddGroceryItem />
      <GroceryList />
    </div>
  );
}