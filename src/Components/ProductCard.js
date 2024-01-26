import * as React from "react";
import Box from "@mui/material/Box";
import { Card, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProductCard = () => {
  return (
    <Card
    raised="true"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: { xs: "auto" },
        border: "solid 1px #c5c5c5"
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: "40%" },
          height: { xs: "200px", md: "auto" },
        }}
        image="/avocado.jpg"
        alt="Product image"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", position: "relative" }}>
          <Typography
            component="div"
            variant="body1"
            color="grey.main"
            gutterBottom
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "0.6em",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Fresh Produce
          </Typography>
          <Typography
            variant="h6"
            color="primary.main"
            component="div"
            gutterBottom
            sx={{
              mt: "5px",
              fontFamily: "Helvetica Neue",
              fontWeight: "bold",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            Fresh Organic Avocados
          </Typography>
          <Typography
            variant="body1"
            color="text.light"
            component="div"
            gutterBottom
            sx={{
              fontFamily: "Roboto",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography
            variant="body1"
            color="primary.main"
            component="div"
            gutterBottom
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "1.7em",
            }}
          >
            $14.99
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "primary.main" }}
          >
            Add to cart
          </Button>
          <Button
            variant="text"
            size="small"
            endIcon={<ChevronRightIcon sx={{ color: "priary.main" }} />}
            sx={{
              color: "primary.main",
              position: "absolute",
              bottom: "20px",
              right: "20px",
            }}
          >
            View
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ProductCard;
