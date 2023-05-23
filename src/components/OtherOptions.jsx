import React, { useState, useContext } from "react";
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
import { formDataContext } from "@/contexts/bookingContext";

export default function OtherOptionsSection({ open, handleInfoClick }) {
  //consume the context
  const { formData, dispatch } = useContext(formDataContext);
  return (
    <>
      <h2>Other options</h2>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Green Option +249,-"
          //send a dispatch on changes
          onChange={(e) =>
            dispatch({
              action: "UPDATE_FIELD",
              payload: { field: "green", value: e.target.value },
            })
          }
        />
        <div className={styles.tentOption}>
          <FormControlLabel
            control={<Checkbox />}
            label="Tent setup"
            onChecked={(e) =>
              dispatch({
                action: "UPDATE_FIELD",
                payload: { field: "tent", value: e.target.value },
              })
            }
          />
          <div onClick={handleInfoClick} style={{ display: "inline-block" }}>
            <div>
              {!open && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  {/* SVG path */}
                </svg>
              )}
            </div>
            {open && (
              <div>
                {/* modal besked med info om priser */}
                <Alert severity="info" sx={{ backgroundColor: "#DCF2C7" }}>
                  2-pers: +299,- <br /> 3-pers: +399,- <br />
                  OBS: Including the tent
                </Alert>
              </div>
            )}
          </div>
        </div>
      </FormGroup>
    </>
  );
}
