import { useState } from "react";
import { useNews } from "../hooks/useNews";
import NewsCard from "../components/NewsCard";
import CategoryFilter from '../components/CategoryFilter';
import Pagination from "../components/Pagination";

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const { articles, loading, error } = useNews(search, category, page);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search news..."
        className="w-full md:w-1/2 p-3 mb-6 border rounded-lg"
        onChange={(e) => setSearch(e.target.value)}
      />

      <CategoryFilter selected={category} onChange={setCategory} />

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles?.map((article) => (
          <NewsCard key={article.uuid} article={article} />
        ))}

        {meta?.last_page > 1 && (
            <Pagination
                currentPage={page}
                totalPages={meta.last_page}
                onPageChange={setPage}
            />
        )}
      </div>
    </div>
  );
};

export default Home;
