import React, { useState } from "react";
import "../../index.scss";
import { Box, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilterData from "./FILTER.json";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from '@mui/material/Checkbox';
const Popup = () => {
    const[btnState,setBtnState]=useState(false);
  let currentFilter = FilterData.filter((val) => {
    return val.name === "Sort";
  });
  let [{ description }] = currentFilter;
  let [Description, setDescription] = useState(description);
  function Filter(e) {
    currentFilter = FilterData.filter((val, index) => {
      return val.name === e.target.outerText;
    });
    [{ description }] = currentFilter;
    setDescription(description);
    setBtnState(true);
    console.log(e);
  }
  let addColor=btnState?'addColor':null;
  return (
    <Box className="popupContainer">
      <Box className="row popupRow">
        <h2>Filter</h2>
        <CloseIcon />
      </Box>
      <Grid container style={{ borderTop: "1px solid #ccc" }}>
        <Grid xs={4} item className="popupList">
          <ul>
            <li onClick={(e) => Filter(e)}>
              <h3>Sort</h3>
            </li>
            <li onClick={(e) => Filter(e)}>
              <h3>Delivery Time</h3>
            </li>
            <li onClick={(e) => Filter(e)}>
              <h3>Cuisines</h3>
            </li>
            <li onClick={(e) => Filter(e)}>
              <h3>Explore</h3>
            </li>
            <li onClick={(e) => Filter(e)}>
              <h3>Ratings</h3>
            </li>
            <li onClick={(e) => Filter(e)}>
              <h3>Veg/Non-Veg</h3>
            </li>
            <li onClick={(e) => Filter(e)}>
              <h3>Offers</h3>
            </li>
            <li onClick={(e) => Filter(e)}>
              <h3>Cost for two</h3>
            </li>
          </ul>
        </Grid>
        <Grid xs={8} item className="popupDescription">
          <FormControl style={{padding:'20px'}}>
            <FormLabel id="demo-radio-buttons-group-label">
              {Description.title}
            </FormLabel>
            {Description.type ? (
              <>
                {Description.values.map((val, index) => {
                  return (
                    <FormControlLabel control={<Checkbox />} label={val} key={index} />
                  );
                })}
              </>
            ) : (
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                {Description.values.map((val, index) => {
                  return (
                    <FormControlLabel
                      value={val}
                      control={<Radio />}
                      label={val}
                      key={index}
                    />
                  );
                })}
              </RadioGroup>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Popup;

