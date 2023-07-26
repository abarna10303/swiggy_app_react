import React, { useState } from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SwiggyLogo from "../../assets/images/logo.png";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setSearchData } from "../../features/counter/counterSlice";
function Header() {
  const[searchData,setSearchDatas]=useState('');
  const dispatch=useDispatch();
  const handlingInput=(e)=>{
    setSearchDatas(e.target.value);
    dispatch(setSearchData(searchData));
  }
  return (
    <Box component="header" sx={{ border: "1px solid #ccc" }}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          pt={1}
          pb={1}
        >
          <Stack direction="row" alignItems="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "&:hover": { cursor: "pointer" },
              }}
            >
              <Box component="img" src={SwiggyLogo} width="37px"></Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  borderRight: "1px solid #ccc",
                  margin: "20px 10px",
                  paddingRight: "10px",
                }}
              >
                Swiggy
              </Typography>
            </Box>
            <Box>
              <Button
                variant="text"
                startIcon={
                  <NearMeIcon
                    sx={{
                      color: "rgb(241, 87, 0)",
                      height: "27px",
                      width: "27px",
                    }}
                  />
                }
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "rgb(241, 87, 0)",
                      height: "27px",
                      width: "27px",
                    }}
                  />
                }
                sx={{
                  fontWeight: "bold",
                  color: "rgba(2, 6, 12, 0.75);",
                  textTransform: "none",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                Setup your precise location
              </Button>
            </Box>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Box sx={{ width: "496px", position: "relative" }}>
              <Box
                component="input"
                placeholder="Search for restaurant and food"
                p={2}
                sx={{
                  width: "100%",
                  backgroundColor: "rgb(240, 240, 245)",
                  border: "none",
                  borderRadius: "10px",
                  "&:focus": {
                    outline: "none",
                  },
                  "&::placeholder": {
                    fontSize: "14px",
                    color: "#02060C99",
                  },
                }}
                value={searchData}
                onChange={handlingInput}
              ></Box>
              <SearchIcon
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "2%",
                  transform: "translateY(-50%)",
                  color: "#02060C99",
                }}
              />
            </Box>
            <Box>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <AccountCircleIcon sx={{ height: "50px", width: "50px" }} />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
