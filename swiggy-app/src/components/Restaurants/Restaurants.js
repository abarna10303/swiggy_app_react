import Box from "@mui/material/Box";
import React from "react";
import "../../index.scss";
import Grid from "@mui/material/Grid";
import FoodData from "../../FOODS.json";
import StarIcon from "@mui/icons-material/Star";
import { Button, Container, Stack, Typography } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import SortSharpIcon from "@mui/icons-material/SortSharp";
import { useSelector } from "react-redux";
function Restaurants() {
  const state = useSelector(({ datas }) => datas);
  const foodDatas = FoodData.filter((val) => {
    if (state.searchData === "") {
      return val;
    } else {
      return val.name.toLowerCase().match(state.searchData);
    }
  });
  console.log(state.searchData);
  return (
    <Box component="section" pt={2} pb={2}>
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "black" }}
            mb={2}
          >
            Restaurants with online food delivery in Chennai
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              "& button": {
                color: "black",
                borderRadius: "25px",
                border: "1px solid #ccc",
                textTransform: "none",
              },
            }}
          >
            <Button variant="outlined" endIcon={<SortSharpIcon />}>
              Filter
            </Button>
            <Button variant="outlined" endIcon={<KeyboardArrowDownSharpIcon />}>
              Sort By
            </Button>
            <Button variant="outlined">Fast Delivery</Button>
            <Button variant="outlined">Rateing 4.0+</Button>
            <Button variant="outlined">Pure veg</Button>
            <Button variant="outlined">Offers</Button>
            <Button variant="outlined">Rs.300 - Rs.600</Button>
            <Button variant="outlined">Lessthen Rs.300</Button>
          </Stack>
        </Box>
        <Grid container spacing={2} sx={{ padding: "20px 0px" }}>
          {foodDatas.map((val, index) => {
            return (
              <Grid
                item
                xs={3}
                p={2}
                key={index}
                sx={{
                  "&:hover": {
                    transform: "scale(0.95)",
                    transition: "0.3s",
                  },
                  transition: "0.3s",
                }}
              >
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: "20px",
                    },
                  }}
                >
                  <Box component="img" src={val.image} alt={val.name}></Box>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    {val.name}
                  </Typography>
                  {val.rateing >= 4 ? (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        component="span"
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          height: "20px",
                          width: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50%",
                          marginRight:'10px',
                        }}
                      >
                        <StarIcon sx={{ height: "15px", width: "15px" }} />
                      </Box>
                      <Typography>{val.rateing}</Typography>
                    </Box>
                  ) : (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        component="span"
                        sx={{
                          backgroundColor: "orange",
                          color: "white",
                          height: "20px",
                          width: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50%",
                          marginRight:"10px",
                        }}
                      >
                        <StarIcon sx={{ height: "15px", width: "15px" }} />
                      </Box>
                      <Typography>{val.rateing}</Typography>
                    </Box>
                  )}
                  <Typography>{val.tittle}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Restaurants;
