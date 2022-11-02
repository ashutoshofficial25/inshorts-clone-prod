import React from "react";
import "./NavInshorts.css";
import HumburgerDrawer from "./HumburgerDrawer";
import { Button } from "@mui/material";
import logoInShorts from "../logo_inshorts.png";

const NavInshorts = ({ setCategory, setLoading, category }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HumburgerDrawer
          className="humburgerDrawer"
          category={category}
          setCategory={setCategory}
          setLoading={setLoading}
        />

        <img
          className="nav-logo"
          src={logoInShorts}
          style={{ cursor: "pointer" }}
          alt="inshorts-logo"
          height="72px"
        />
        <Button>😊</Button>
      </div>
    </div>
  );
};

export default NavInshorts;
