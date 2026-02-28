import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  return (
    <Link to={`/article/${article.uuid}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
        <img
          src={article.image_url || "https://via.placeholder.com/400x200"}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            {article.description}
          </p>
          <p className="text-xs text-gray-500">
            {new Date(article.published_at).toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
