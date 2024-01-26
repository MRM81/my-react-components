"use client";
import { Box, ButtonGroup, Button } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      id="top"
      display="flex"
      justifyContent="center"
      width="100%"
      height="70px"
      sx={{ backgroundColor: "green" }}
    >
      <ButtonGroup>
        <Button variant="text" href="#blog-cards" sx={{ color: "white" }}>
          Blog Cards
        </Button>
        <Button variant="text" href="#product-cards" sx={{ color: "white" }}>
          Product Cards
        </Button>
        <Button variant="text" href="#recipe-cards" sx={{ color: "white" }}>
          Recipe Cards
        </Button>
        <Button variant="text" href="#dialog-box" sx={{ color: "white" }}>
          Dialog Box
        </Button>
        <Button variant="text" href="#image-revolver" sx={{ color: "white" }}>
          Image revolver
        </Button>
        <Button variant="text" href="#image-slider" sx={{ color: "white" }}>
          Image Slider
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Header;
