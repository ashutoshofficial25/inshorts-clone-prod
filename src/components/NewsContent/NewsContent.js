import { Button, LinearProgress, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsArray = [], setLoadmore, loadmore }) => {
  return (
    <Container sx={{ padding: "3rem" }}>
      {newsArray.length > 0 ? (
        newsArray.map((newsItem) => (
          <NewsCard key={newsItem.id} newsItem={newsItem} />
        ))
      ) : (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="secondary" />
          <br />
          <LinearProgress color="success" />
          <br />
          <LinearProgress color="inherit" />
        </Stack>
      )}

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
