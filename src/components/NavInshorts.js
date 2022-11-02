import React from "react";
import "./NavInshorts.css";
import HumburgerDrawer from "./HumburgerDrawer";
import { Button } from "@mui/material";
import logoInShorts from "../logo_inshorts.png";

const NavInshorts = ({ setCategory, setLoading }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HumburgerDrawer
          className="humburgerDrawer"
          setCategory={setCategory}
          setLoading={setLoading}
        />

        <img
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
