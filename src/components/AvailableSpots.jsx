import React, { useContext } from "react";
import { InputLabel, Select, FormGroup, MenuItem } from "@mui/material";
import styles from "../styles/Form.module.css";
import { formDataContext } from "@/contexts/bookingContext";

export default function AvailableSpotsSection({ areaData }) {
  //consume the context
  const { formData, dispatch } = useContext(formDataContext);
  return (
    <>
      <h2 className={styles.h2}>Available Spots</h2>
      <FormGroup
        className={styles.campText}
        labelId="dropdown-label"
        id="dropdowm"
        label="Available spots"
        // value={formData.area}
        // onChange={(e) =>
        //   dispatch({
        //     //dispatch to the global formData obj. with new state value
        //     action: "UPDATE_FIELD",
        //     payload: { field: "area", value: e.target.value },
        //   })
        // }
      >
        {areaData.map((spot, availability) => (
          <p key={availability} value={spot.available}>
            {spot.area + ": " + spot.available}
          </p>
        ))}
        <InputLabel id="dropdown-label" label="spots" placeholder="form" className={styles.dropdownLabel} style={{ position: "relative" }}>
          Choose Camp
        </InputLabel>
        <Select
          className={styles.inputField}
          labelId="dropdown-label"
          id="dropdowm"
          label="Available spots"
          onChange={(e) => {
            dispatch({
              action: "UPDATE_FIELD",
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
