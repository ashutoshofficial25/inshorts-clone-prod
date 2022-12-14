import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";

function App() {
  const [category, setCategory] = useState("all");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(15);
  const [loading, setLoading] = useState(true);

  // const API_KEY = "a17bc6ce27b243eb9ab7b70a6cfd0298";

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://inshorts.deta.dev/news?category=${category}`
      );
      if (news) {
        setNewsArray(news?.data.data);
        setNewsResults(news?.data.data.length);
        setLoading(false);
      } else {
        setLoading(true);
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
      <NavInshorts
        setCategory={setCategory}
        category={category}
        setLoading={setLoading}
      />
      <NewsContent
        newsArray={newsArray}
        setLoadmore={setLoadmore}
        loadmore={loadmore}
        loading={loading}
      />
    </div>
  );
}

export default App;
