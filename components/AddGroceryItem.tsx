"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/components/ui/use-toast"

export default function AddGroceryItem() {
  const [item, setItem] = useState('');
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!item.trim()) return;

    const response = await fetch('/api/groceries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: item }),
    });

    if (response.ok) {
      setItem('');
      toast({
        title: "Item added",
        description: `${item} has been added to your grocery list.`,
      })
    } else {
      toast({
        title: "Error",
        description: "Failed to add item. Please try again.",
        variant: "destructive",
      })
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <Input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add a grocery item"
        className="flex-grow"
      />
      <Button type="submit">Add Item</Button>
    </form>
  );
}