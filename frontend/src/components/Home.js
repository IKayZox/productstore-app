import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="main_div"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://img.freepik.com/photos-gratuite/arrangement-ordinateur-portable-boites_23-2148790084.jpg?t=st=1740105964~exp=1740109564~hmac=acb3003098e51e39bddd09243cf043723ee439aa2dc2b561fc74c2fdbe2ab770&w=996)",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{ fontFamily: "monospace", fontWeight: "bold" }}
        >
          Welcome to Our Store
        </Typography>
        <Button
          sx={{
            marginTop: 5,
            background: "green",
            borderRadius: "1rem",
            padding: "10px 20px",
            fontSize: "1.2rem",
            ":hover": { background: "darkgreen" },
          }}
          variant="contained"
          component={Link}
          to="/products"
        >
          View All Products
        </Button>
      </Box>
    </div>
  );
}
