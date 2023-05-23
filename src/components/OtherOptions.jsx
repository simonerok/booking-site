import React, { useState } from "react";
import { Alert, InputLabel, FormControl, Card, CardContent, TextField, Select, Checkbox, FormGroup, FormControlLabel, MenuItem } from "@mui/material";
import MyButton from "@/components/MyButton.jsx";
import styles from "../styles/Form.module.css";

export default function OtherOptionsSection({ open, handleInfoClick }) {
  return (
    <>
      <h2>Other options</h2>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Green Option +249,-" />
        <div className={styles.tentOption}>
          <FormControlLabel control={<Checkbox />} label="Tent setup" />
          <div onClick={handleInfoClick} style={{ display: "inline-block" }}>
            <div>
              {!open && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
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
