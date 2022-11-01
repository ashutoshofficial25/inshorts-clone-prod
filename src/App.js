import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import NavInshorts from "./components/NavInshorts";
import NewsCard from "./components/NewsCard/NewsCard";
import NewsContent from "./components/NewsContent/NewsContent";

function App() {
  const [category, setCategory] = useState("all");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(15);

  const API_KEY = "a17bc6ce27b243eb9ab7b70a6cfd0298";

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://inshorts.deta.dev/news?category=${category}`
      );
      if (news) {
        setNewsArray(news?.data.data);
        setNewsResults(news?.data.data.length);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  useEffect(() => {
    newsApi();
  }, [newsResults, loadmore, category]);

  return (
    <div>
      <NavInshorts setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        setLoadmore={setLoadmore}
        loadmore={loadmore}
      />
    </div>
  );
}

export default App;
