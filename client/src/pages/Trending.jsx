import { useEffect, useState } from "react";
import axios from "axios";

function Trending() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
 // ✅ Replace with your API key

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const countries = ["us", "gb", "in", "cn"];
        const requests = countries.map((country) =>
          axios.get(`https://newsapi.org/v2/top-headlines`, {
            params: {
              country: country,
              category: "technology", // ✅ Optional: restrict to technology news
              apiKey: API_KEY,
            },
          })
        );
        const responses = await Promise.all(requests);
        const combinedArticles = responses.flatMap((res) => res.data.articles);
        setArticles(combinedArticles);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [API_KEY]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Trending Tech News (US, UK, India, China)</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="border rounded-lg shadow p-4 bg-white">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded mb-3" />
              )}
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{article.source.name}</p>
              <p className="text-gray-700 mb-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Trending;
