import React, { useState } from "react";
import { Alert, InputLabel, FormControl, Card, CardContent, TextField, Select, Checkbox, FormGroup, FormControlLabel, MenuItem } from "@mui/material";
import MyButton from "@/components/MyButton.jsx";
import styles from "../styles/Form.module.css";
import OtherOptionsSection from "./OtherOptions";
import AvailableSpotsSection from "./AvailableSpots";
import TicketsSection from "./TicketSection";

export default function TicketForm({ spotData }) {
  console.log(spotData, "from ticket");
  const [selectedSpot, setSelectedSpot] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [numberOfTickets, setNumberOfTickets] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSelectedSpot(event.target.value);
    setSelectedArea(event.target.value);
  };

  const handleInfoClick = () => {
    setOpen(!open);
  };

  function reserveSpot(e) {
    e.preventDefault();
    fetch("http://localhost:8080/reserve-spot", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        /* dette er vores payload */
        area: selectedArea,
        amount: numberOfTickets,
      }),
    });
    console.log("reserve");
  }

  return (
    <>
      <h1>Ticket details</h1>
      <div className={styles.formBackground}>
        <form className={styles.form} onSubmit={reserveSpot}>
          <FormControl variant="filled">
            <Card>
              <CardContent className={styles.formWrapper}>
                <TicketsSection numberOfTickets={numberOfTickets} setNumberOfTickets={setNumberOfTickets} selectedSpot={selectedSpot} selectedArea={selectedArea} handleChange={handleChange} />
                <AvailableSpotsSection areaData={spotData} selectedSpot={selectedSpot} selectedArea={selectedArea} handleChange={handleChange} />
                <OtherOptionsSection open={open} handleInfoClick={handleInfoClick} />
              </CardContent>
              <div className={styles.btn_container}>
                <MyButton type="submit">Go to payment</MyButton>
              </div>
            </Card>
          </FormControl>
        </form>
      </div>
    </>
  );
}
