import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
  setTimeout(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, 0);
}, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Favorites</h1>
        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>

      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites yet. Click the heart icon on an article to save it!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((article) => (
            <NewsCard key={article.uuid} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
