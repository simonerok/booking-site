import React, { useState } from "react";
import {
  Alert,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  TextField,
  Select,
  Checkbox,
  FormGroup,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import MyButton from "@/components/MyButton.jsx";
import styles from "../styles/Form.module.css";

export default function AvailableSpotsSection({
  globalData,
  dispatch,
  areaData,
  selectedSpot,
  selectedArea, //handleChange
}) {
  console.log(areaData);
  return (
    <>
      <h2>Available Spots:</h2>
      <FormGroup
        className={styles.campText}
        labelId="dropdown-label"
        id="dropdowm"
        label="Available spots"
        value={selectedArea}
      >
        {areaData.map((spot, availability) => (
          <p key={availability} value={spot.available}>
            {spot.area + ": " + spot.available}
          </p>
        ))}
        <InputLabel
          id="dropdown-label"
          label="spots"
          placeholder="form"
          className={styles.dropdownLabel}
          style={{ position: "relative" }}
        >
          Choose Camp
        </InputLabel>
        <Select
          className={styles.inputField}
          labelId="dropdown-label"
          id="dropdowm"
          label="Available spots"
          value={selectedArea}
          // onChange={handleChange}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_FIELD",
              payload: { field: "area", value: e.target.value },
            });
          }}
        >
          {areaData.map((spot, availability) => (
            <MenuItem key={availability} value={spot.area}>
              {spot.area}
            </MenuItem>
          ))}
        </Select>
      </FormGroup>
    </>
  );
}
