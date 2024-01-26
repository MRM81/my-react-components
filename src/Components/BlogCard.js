"use client";
import { Box, Card, CardContent } from "@mui/material";
import { Typography, CardMedia, Button } from "@mui/material";
import dateFormat from "dateformat";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const BlogCard = (props) => {
  const date = dateFormat(Date.now(), "mmmm dS, yyyy");
  const string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const content = string.split(" ", 23).join(" ") + ".....";
  return (
    <Card
      raised="true"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: { xs: "auto" },
        border: "solid 1px #c5c5c5",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: "40%" },
          height: { xs: "200px", md: "auto" },
        }}
        image="/avocado4.jpg"
        alt="Blog image"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{ pt: "0", position: "relative", height: "100%", mt: "10px" }}
        >
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
            {date}
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
            color="grey.main"
            component="div"
            gutterBottom
            sx={{
              fontFamily: "Roboto",
            }}
          >
            {content}
          </Typography>

          <Button
            variant="contained"
            size="small"
            endIcon={<ChevronRightIcon sx={{ color: "priary.main" }} />}
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              mt: "10px",
            }}
          >
            Read More
          </Button>
          <Typography
            component="div"
            variant="body1"
            color="primary.main"
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "0.6em",
              letterSpacing: "2px",
              textTransform: "uppercase",
              mt: "20px",
            }}
          >
            By Lilly McLachlan
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BlogCard;
