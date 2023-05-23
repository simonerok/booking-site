import React, { useState } from "react";
import { Alert, InputLabel, FormControl, Card, CardContent, TextField, Select, Checkbox, FormGroup, FormControlLabel, MenuItem } from "@mui/material";
import MyButton from "@/components/MyButton.jsx";
import styles from "../styles/Form.module.css";

export default function TicketsSection({ numberOfTickets, setNumberOfTickets, selectedSpot, selectedArea, handleChange }) {
  return (
    <>
      <h2>Tickets</h2>
      <TextField className={styles.inputField} type="date" helperText="Choose a date" />
      <br />
      <TextField className={styles.inputField} type="number" label="Number of tickets" value={numberOfTickets} onChange={(event) => setNumberOfTickets(event.target.value)} />
      <InputLabel id="dropdown-label" label="ticket-type" placeholder="Ticket-type" className={styles.dropdownLabel} style={{ position: "relative" }}>
        Choose ticket type
      </InputLabel>
      <Select className={styles.inputField} labelId="ticket-type" id="dropdowm" label="Ticket-Type" value={selectedSpot} onChange={handleChange}>
        <MenuItem value="reg">Regular 799,-</MenuItem>
        <MenuItem value="vip">VIP 1299,-</MenuItem>
      </Select>
    </>
  );
}
