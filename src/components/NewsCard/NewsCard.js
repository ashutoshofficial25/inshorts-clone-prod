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
  let day = weekday[fulldate.getDay()];
  let date = fulldate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <Card
      elevation={8}
      sx={{ display: "flex", marginBottom: "25px", padding: "10px" }}
    >
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="news-img"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardHeader title={newsItem.title} disableTypography={true} />
        <CardContent>
          <Box className="author">
            <Link href={newsItem.url} target="_blank">
              <b> short</b>
            </Link>
            by
            {newsItem.author ? newsItem.author : "unknown"} /{" "}
            {time
              ? `${hour - 12}${date[4].substring(2, 5)} pm`
              : `${hour}${date[4].substring(2, 5)} am`}{" "}
            {day}
          </Box>
          {newsItem.description}
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Typography>
            read more at{" "}
            <Link sx={{ textDecoration: "none" }} href={newsItem.url}>
              {" "}
              {newsItem.source.name}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default NewsCard;
