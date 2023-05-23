import { FormControl, Card, CardContent, TextField, FormGroup } from "@mui/material";
import InputMask from "react-input-mask";
import { useContext, useRef, useState } from "react";
import styles from "../styles/Form.module.css";
import { formDataContext } from "@/contexts/bookingContext";
import BookFormContext from "@/contexts/bookFormContext";

export default function FormPay() {
  const ref = useRef(null);
  const inputRef = useRef(null);
  //const { paymentInfo: ticketInfo, dispatch } = useContext(PaymentContext); //ticket booking context
  const [formPayment, setFormPayment] = useState({
    fullname: "",
    email: "",
    phone: "",
  });
  console.log(formPayment);
  //handle input changes for personal info:
  function handlePIChanges(e) {
    const { name, value } = e.target;
    setFormPayment((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  //creditcard number state
  const [creditcard, setCreditcard] = useState("");
  const handleCCInput = ({ target: { value } }) => setCreditcard(value);
  //creditcard exp. date state
  const [expDate, setExpDate] = useState("");
  const handleExpInput = ({ target: { value } }) => setExpDate(value);

  //const invalid form input - error state:
  const [formErrors, setFormErrors] = useState({});

  //handle Submit get full payload
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formPayment);
    //chatgpt helped
    const errors = {};
    //set to default false with each submit

    if (!formPayment.fullname) {
      errors.name = "Name is required";
    }
    if (!formPayment.email || !formPayment.email.includes("@")) {
      errors.email = "Email is required";
    }
    if (!formPayment.card || formPayment.card < 16) {
      errors.creditcard = "Creditcard full no is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      //dispatch function that returns new state
      dispatch({
        action: "SUBMIT",
        payload: {
          fullname: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
        },
      });
    }
  }
  /* CONFIRM RESERVATION */
  function confirmReservation(e) {
    e.preventDefault();
    fetch("http://localhost:8080//fullfill-reservation", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        /* dette er vores payload med id´et fra reservation */
        id: "",
      }),
    });
    console.log("confirm reservation");
  }

  return (
    <>
      <h1>Payment details</h1>
      <article>
        <h2>Overview</h2>
        <article className="TicketOverview_container">
          {/* Fetch data from tickets with TicketContext*/}
          {/* <p>{ticketInfo.name}</p>
          <p>{ticketInfo.email}</p> */}
          {/* date */}
          {/* number of tickets/ ticket type */}
        </article>
      </article>
      <form onSubmit={handleSubmit}>
        <FormControl variant="outlined">
          <Card>
            <CardContent className={styles.formWrapper}>
              <h2>Personal data</h2>
              <TextField name="fullname" id="fullname" label="Name" placeholder={"fx: John Doe"} required onChange={handlePIChanges} />

              <br></br>
              <TextField name="email" id="email" label="Email" placeholder={"fx: JohnDoe@gmail.com"} required onChange={handlePIChanges} error={!!formErrors.email} helperText={formErrors.email} />
              <br></br>
              <TextField name="phone" type="tel" id="phone" label="Phone" maxLength="4" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" placeholder={"fx: 11111111"} required onChange={handlePIChanges} />

              <h2>Payment</h2>
              <FormGroup variant="standard" id="paymentInfoGroup">
                <TextField type="text" name="Cardholder's name" label="Cardholder's name" required></TextField>
                <br></br>
                <TextField
                  type="text"
                  id="standardCard"
                  label="Credit Card No."
                  required
                  name="creditcard"
                  maxLength="16"
                  value={creditcard}
                  onChange={handleCCInput}
                  variant="outlined"
                  error={!!formErrors.creditcard}
                  helperText={formErrors.creditcard}
                  //used InputProps for custom inputs and components with react-input-mask
                  //chatgpt helped
                  InputProps={{
                    inputComponent: InputMask,
                    inputProps: {
                      mask: "9999 9999 9999 9999",
                      maskChar: "-",
                    },
                  }}
                ></TextField>
                <br></br>
                <TextField
                  maxlength="4"
                  type="text"
                  id="exp.date"
                  variant="outlined"
                  name="expDate"
                  label="Exp. Date (MM/YY)"
                  onChange={handleExpInput}
                  InputProps={{
                    inputComponent: InputMask,
                    inputProps: {
                      mask: "99/99",
                    },
                  }}
                />
                <TextField type="text" name="CVC" label="CVC" min="3"></TextField>
              </FormGroup>
            </CardContent>
            <button onSubmit={confirmReservation} type="submit">
              Submit
            </button>
          </Card>
        </FormControl>
      </form>
    </>
  );
}
