import { useState, useCallback } from "react";
import { fetchItems } from "../api";
import { Item } from "../types";

interface UseFetchItemsResult {
  loadItems: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const useFetchItems = (
  onFetch: (items: Item[]) => void
): UseFetchItemsResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadItems = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchItems();
      onFetch(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [onFetch]);

  return { loadItems, loading, error };
};

export default useFetchItems;
