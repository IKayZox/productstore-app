import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [value, setValue] = useState(0);
  return (
    <AppBar sx={{ backgroundColor: "#2C3E50" }} position="sticky">
      <Toolbar>
        <NavLink
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MenuBookIcon fontSize="large" style={{ marginRight: "10px" }} />
          <Typography variant="h6">Store</Typography>
        </NavLink>

        <Tabs
          sx={{ marginLeft: "auto" }}
          textColor="inherit"
          indicatorColor="secondary"
          value={value}
          onChange={(e, val) => setValue(val)}
        >
          <Tab component={NavLink} to="/add" label="Add Product" />
          <Tab component={NavLink} to="/products" label="Products" />
          <Tab component={NavLink} to="/about" label="About Us" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
