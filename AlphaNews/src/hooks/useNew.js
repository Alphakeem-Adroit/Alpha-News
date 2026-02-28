import { useState, useEffect } from "react";
import { fetchTopNews } from "../services/newsApi";

export const useNews = (search, category, page) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchTopNews({ search, category, page });
        setArticles(data.data);
        setMeta(data.meta);
      } catch (err) {
        setError(err.message || "Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [search, category, page]);

  return { articles, loading, error, meta };
};
