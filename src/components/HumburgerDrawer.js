import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { SwipeableDrawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import categories from "../data/category";

export default function SwipeableTemporaryDrawer({
  setCategory,
  setLoading,
  category,
}) {
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keyDown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleClick = (text) => {
    setCategory(text.toLowerCase());
    setLoading(true);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "rgb(48 48 54)",
        color: "#eee",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Typography color="#999999">Categories</Typography>
        </ListItem>
        <Divider />
      </List>
      <List>
        {categories.map((text) => (
          <ListItem
            key={text}
            className={category == text.toLowerCase() ? "active-item" : ""}
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#999999",
              },
              marginBottom: "0px",
            }}
          >
            <ListItemButton onClick={() => handleClick(text)}>
              {text}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon fontSize="large" />
      </Button>
      <Button>{category}</Button>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}
