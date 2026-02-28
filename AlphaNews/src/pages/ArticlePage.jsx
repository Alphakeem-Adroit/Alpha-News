import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTopNews } from "../services/newsApi";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await fetchTopNews({}); // fetch top news
        const found = data.data.find((a) => a.uuid === id);
        setArticle(found);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!article) return <p className="p-6">Article not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back
      </Link>

      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-4">
        {article.author} | {new Date(article.published_at).toLocaleString()}
      </p>
      <img
        src={article.image_url}
        alt={article.title}
        className="w-full h-96 object-cover rounded mb-6"
      />
      <p className="text-lg mb-6">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline"
      >
        Read full article on source
      </a>
    </div>
  );
};

export default ArticlePage;
