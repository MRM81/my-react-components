import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import ProductCard from "./ProductCard";
import BlogCard from "./BlogCard";
import DialogBox from "./DialogBox";
import ImageRevolver from "./ImageRevolver/ImageRevolver";
import ImageSlider from "./ImageSlider/ImageSlider";

export default function GridLayout() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <Button
        variant="contained"
        href="#top"
        sx={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "100" }}
      >
        TOP
      </Button>

      {/* *************************************************************************************************** */}
      {/* ************************************** Blog Card Code ********************************************* */}
      {/* *************************************************************************************************** */}
      <section id="blog-cards">
        <Typography
          variant="h5"
          component="h5"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            color: "primary.main",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Blog Cards
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, lg: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={4} key={index}>
                <BlogCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>

      <Box m="50px"></Box>
      {/* ****************************************************************************************************** */}
      {/* ************************************** Product Card Code ********************************************* */}
      {/* ****************************************************************************************************** */}
      <section id="product-cards">
        <Typography
          variant="h5"
          component="h5"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            color: "primary.main",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Product Cards
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, lg: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={4} key={index}>
                <ProductCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>
      <Box m="50px"></Box>
      {/* *************************************************************************************************** */}
      {/* ************************************** Recipe Card Code ********************************************* */}
      {/* *************************************************************************************************** */}
      <section id="recipe-cards">
        <Typography
          variant="h5"
          component="h5"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            color: "primary.main",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Recipe Cards
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, lg: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={4} key={index}>
                <BlogCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>

      <Box m="50px"></Box>
      {/* *************************************************************************************************** */}
      {/* ************************************** Dialog Box Code ******************************************** */}
      {/* *************************************************************************************************** */}

      <section id="dialog-box">
        <Typography
          variant="h5"
          component="h5"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            color: "primary.main",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Dialog Box
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            p: "30px 0px",
            boxShadow: "2px 2px 5px grey",
            border: "solid 1px grey",
          }}
        >
          <DialogBox />
        </Box>
      </section>

      <Box m="50px"></Box>
      {/* ****************************************************************************************************** */}
      {/* ************************************** Image Revolver Code ********************************************* */}
      {/* ****************************************************************************************************** */}
      <section id="image-revolver">
      <Typography
          variant="h5"
          component="h5"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            color: "primary.main",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Image Revolver
        </Typography>
        <Box className="portfolio-banner">
          <ImageRevolver />
        </Box>
      </section>

      <Box m="50px"></Box>
      {/* ****************************************************************************************************** */}
      {/* ************************************** Inage Slider Code ********************************************* */}
      {/* ****************************************************************************************************** */}
      <section id="image-slider">
      <Typography
          variant="h5"
          component="h5"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            color: "primary.main",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Image Slider
        </Typography>
        <Box className="image-slider-container">
          <ImageSlider />
        </Box>
      </section>
    </Box>
  );
}
