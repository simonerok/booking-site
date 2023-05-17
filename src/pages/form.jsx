import React from "react";
import { useState } from "react";
import { Alert, InputLabel, FormControl, Card, CardContent, TextField, Select, Checkbox, FormGroup, FormControlLabel, MenuItem } from "@mui/material";
import { getServerSideProps } from "./index.jsx";
import MyButton from "@/components/MyButton.jsx";
import styles from "../styles/Form.module.css";

/* import Alert from "@/components/Alert.jsx"; */

/* henter spotData fra getServerSideProps som er importeret fra index */
export default function Form({ spotData }) {
  const [selectedSpot, setSelectedSpot] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  /* åben og luk af info ikon */
  const [open, setOpen] = useState(false);

  const handleInfoClick = () => {
    setOpen(!open);
  };

  const handleChange = (event) => {
    setSelectedSpot(event.target.value);
    setSelectedArea(event.target.value);
  };

  return (
    <>
      <h1>Ticket details</h1>
      <form>
        <FormControl variant="filled">
          <Card className={styles.cardBackgroun}>
            <CardContent className={styles.formWrapper}>
              <h2>Tickets</h2>
              <TextField className={styles.inputField} type="date"></TextField>
              <TextField className={styles.inputField} type="number" label="Number of tickets" />

              <InputLabel id="dropdown-label" label="ticket-type" placeholder="Ticket-type" className={styles.dropdownLabel} style={{ position: "relative" }}>
                Choose ticket type
              </InputLabel>
              <Select className={styles.inputField} labelId="ticket-type" id="dropdowm" label="Ticket-Type" value={(selectedSpot, selectedArea)} onChange={handleChange}>
                <MenuItem value="reg">Regular 799,-</MenuItem>
                <MenuItem value="vip">VIP 1299,-</MenuItem>
              </Select>
              <h2>Available Spots:</h2>
              <FormGroup className={styles.campText} labelId="dropdown-label" id="dropdowm" label="Available spots" value={(selectedSpot, selectedArea)} onChange={handleChange}>
                {spotData.map((spot, availability) => (
                  <p key={availability} value={(spot.available, spot.area)}>
                    {spot.area + ": " + spot.available}
                  </p>
                ))}
                <InputLabel id="dropdown-label" label="spots" placeholder="form" className={styles.dropdownLabel} style={{ position: "relative" }}>
                  Choose Camp
                </InputLabel>
                <Select className={styles.inputField} labelId="dropdown-label" id="dropdowm" label="Available spots" value={(selectedSpot, selectedArea)} onChange={handleChange}>
                  {spotData.map((spot, availability) => (
                    <MenuItem key={availability} value={(spot.available, spot.area)}>
                      {spot.area}
                    </MenuItem>
                  ))}
                </Select>
              </FormGroup>
              <h2>Other options</h2>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Green Option +249,-" />
                <div>
                  <FormControlLabel control={<Checkbox />} label="Tent setup" />

                  <div onClick={handleInfoClick} style={{ display: "inline-block", cursor: "pointer" }}>
                    <div>
                      {!open && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      )}
                    </div>
                    {open && (
                      <div>
                        <Alert severity="info" sx={{ backgroundColor: "#DCF2C7" }}>
                          2-pers: 299,- <br /> 3-pers: 399,- <br />
                          OBS: Including the tent
                        </Alert>
                      </div>
                    )}
                  </div>
                </div>
              </FormGroup>
            </CardContent>
            <div className={styles.btn_container}>
              <MyButton
                className={styles.form_btn}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                Go to payment
              </MyButton>
            </div>
          </Card>
        </FormControl>
      </form>
    </>
  );
}

export { getServerSideProps };
