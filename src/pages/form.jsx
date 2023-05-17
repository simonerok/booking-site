import { useState } from "react";
import { InputLabel, FormControl, Card, CardContent, TextField, Select, Checkbox, FormGroup, FormControlLabel, MenuItem } from "@mui/material";
import { getServerSideProps } from "./index.jsx";
import MyButton from "@/components/MyButton.jsx";
import styles from "../styles/Form.module.css";

/* henter spotData fra getServerSideProps som er importeret fra index */
export default function Form({ spotData }) {
  const [selectedSpot, setSelectedSpot] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const handleChange = (event) => {
    setSelectedSpot(event.target.value);
    setSelectedArea(event.target.value);
  };

  return (
    <>
      <h1>Ticket details</h1>
      <form>
        <FormControl variant="filled">
          <Card>
            <CardContent className={styles.formWrapper}>
              <h2>Tickets</h2>
              <TextField type="date"></TextField>
              <TextField type="number" label="Number of tickets" />

              <InputLabel id="dropdown-label" label="ticket-type" placeholder="Ticket-type" className={styles.dropdownLabel} style={{ position: "relative" }}>
                Choose ticket type
              </InputLabel>
              <Select labelId="ticket-type" id="dropdowm" label="Ticket-Type" value={(selectedSpot, selectedArea)} onChange={handleChange}>
                <MenuItem value="reg">Regular</MenuItem>
                <MenuItem value="vip">VIP</MenuItem>
              </Select>
              <h2>Available Spots:</h2>
              <FormGroup labelId="dropdown-label" id="dropdowm" label="Available spots" value={(selectedSpot, selectedArea)} onChange={handleChange}>
                {spotData.map((spot, availability) => (
                  <p key={availability} value={(spot.available, spot.area)}>
                    {spot.area + ": " + spot.available}
                  </p>
                ))}
                <InputLabel id="dropdown-label" label="spots" placeholder="form" className={styles.dropdownLabel} style={{ position: "relative" }}>
                  Choose Camp
                </InputLabel>
                <Select labelId="dropdown-label" id="dropdowm" label="Available spots" value={(selectedSpot, selectedArea)} onChange={handleChange}>
                  {spotData.map((spot, availability) => (
                    <MenuItem key={availability} value={(spot.available, spot.area)}>
                      {spot.area}
                    </MenuItem>
                  ))}
                </Select>
              </FormGroup>
              <h2>Other options</h2>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Green Option" />
                <FormControlLabel control={<Checkbox />} label="Tent setup" />
              </FormGroup>
            </CardContent>
          </Card>
        </FormControl>
        <MyButton>Go to payment</MyButton>
      </form>
    </>
  );
}

export { getServerSideProps };
