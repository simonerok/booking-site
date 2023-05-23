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
import OtherOptionsSection from "./OtherOptions";
import AvailableSpotsSection from "./AvailableSpots";
import TicketsSection from "./TicketSection";
import { formDataContext } from "@/contexts/bookingContext";

export default function MainTicket({ spotData }) {
  console.log(spotData, "from ticket");
  const [selectedSpot, setSelectedSpot] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [numberOfTickets, setNumberOfTickets] = useState(0);
  const [open, setOpen] = useState(false);

  //context call on the parent
  const { formData, dispatch } = useContext(formDataContext);
  // const handleChange = (event) => {
  //   setSelectedSpot(event.target.value);
  //   setSelectedArea(event.target.value);
  // };

  const handleInfoClick = () => {
    setOpen(!open);
  };

  function reserveSpot(e) {
    e.preventDefault();
    handleNextFormComponent();
    fetch("http://localhost:8080/reserve-spot", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        area: formData.formData.area, //call the formData function and anccess the formData obj with area prop value
        amount: formData.formData.ticketAmount,
      }),
    });
    console.log("test");
  }
  return (
    <>
      <h1>Ticket details</h1>
      <div className={styles.formBackground}>
        <form className={styles.form} onSubmit={reserveSpot}>
          <FormControl variant="filled">
            <Card>
              <CardContent className={styles.formWrapper}>
                <TicketsSection />
                <AvailableSpotsSection areaData={spotData} />
                <OtherOptionsSection
                  open={open}
                  handleInfoClick={handleInfoClick}
                />
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
