import Grid from "@mui/material/Grid";
import React from "react";
import Box from "@mui/material/Box";
import "../../index.scss";
import { Container, Typography } from "@mui/material";
function AdBanner() {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage:
          "linear-gradient( rgb(255, 255, 255),rgb(201, 188, 244))",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }} mb={1}>
              Order Food Online in Chennai
            </Typography>
            <Box
              component="div"
              sx={{
                width: "150px",
                height: "3px",
                backgroundColor: "rgb(241, 87, 0)",
                borderRadius:'3px',
              }}
            ></Box>
          </Grid>
          <Grid item xs={4} className="image">
            <Box
              component="img"
              src={require("../../assets/images/banner/banner2.webp")}
              alt="Offer"
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AdBanner;
