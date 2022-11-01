import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import "./NewsCard.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const NewsCard = ({ newsItem }) => {
  const fulldate = new Date(newsItem.publishedAt);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <Card
      elevation={8}
      sx={{ display: "flex", marginBottom: "25px", padding: "10px" }}
    >
      <CardMedia
        component="img"
        height="250"
        width="300"
        image={
          newsItem.imageUrl
            ? newsItem.imageUrl
            : "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="news-img"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardHeader title={newsItem.title} disableTypography={true} />
        <CardContent>
          <Box className="author" sx={{ pb: 1, color: "#999999" }}>
            <Link
              href={newsItem.url}
              target="_blank"
              sx={{ textDecoration: "none", color: "#001111", fontWeight: 700 }}
            >
              shorts {"  "}
            </Link>
            by
            {newsItem.author ? newsItem.author : "unknown"} / {newsItem.date}
          </Box>
          {newsItem.content}
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1 }}>
          <Typography sx={{ color: "#001111", fontWeight: 600 }}>
            read more...{" "}
          </Typography>
          <Link
            sx={{ textDecoration: "none", color: "#999999" }}
            href={newsItem.readMoreUrl}
            target="_blank"
          >
            {" "}
            <ArrowCircleRightIcon />
          </Link>
        </Box>
      </Box>
    </Card>
  );
};

export default NewsCard;
