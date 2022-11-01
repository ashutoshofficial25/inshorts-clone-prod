import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsArray = [], setLoadmore, loadmore }) => {
  return (
    <Container sx={{ padding: "3rem" }}>
      {newsArray.map((newsItem) => (
        <NewsCard key={newsItem.title} newsItem={newsItem} />
      ))}

      <div style={{ textAlign: "center", paddingTop: "2rem" }}>
        <Button
          onClick={() => setLoadmore(loadmore + 5)}
          variant="outlined"
          sx={{ boxShadow: 3 }}
        >
          Loadmore
        </Button>
      </div>
    </Container>
  );
};

export default NewsContent;
