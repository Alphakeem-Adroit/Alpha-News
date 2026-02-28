import { useState } from "react";
import { useNews } from "../hooks/useNews";
import NewsCard from "../components/NewsCard";
import CategoryFilter from '../components/CategoryFilter';
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const { articles, loading, error, meta } = useNews(search, category, page);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
    <h1 className="text-3xl font-bold">Latest News</h1>
        <Link
            to="/favorites"
            className="px-4 py-2 border rounded hover:bg-gray-200 transition"
        >
            Favorites
        </Link>
    </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search news..."
        className="w-full md:w-1/2 p-3 mb-6 border rounded-lg"
        onChange={(e) => setSearch(e.target.value)}
      />

      <CategoryFilter selected={category} onChange={setCategory} />

      {/* Loading */}
      {/* {loading && <p>Loading...</p>} */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                key={i}
                className="h-72 bg-gray-300 rounded-xl animate-pulse"
                ></div>
            ))
            : articles.map((article) => <NewsCard key={article.uuid} article={article} />)}
        </div>
     

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
