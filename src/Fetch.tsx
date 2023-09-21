import React, { useEffect, useState } from "react";
import { Result } from "./Article";
import ArticleItem from "./ArticlesItem";

function Fetch() {
  const API_URL = "https://api.spaceflightnewsapi.net/v4/articles";

  const [articles, setArticles] = useState<Result[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setArticles(data.results);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {articles.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </>
  );
}

export default Fetch;
