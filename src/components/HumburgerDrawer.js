import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { SwipeableDrawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import categories from "../data/category";

export default function SwipeableTemporaryDrawer({ setCategory }) {
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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton>Categories</ListItemButton>
        </ListItem>
        <Divider />
      </List>
      <List>
        {categories.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItem>
              <ListItemButton>
                <ListItemText onClick={() => setCategory(text)}>
                  {text}
                </ListItemText>
              </ListItemButton>
            </ListItem>
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
