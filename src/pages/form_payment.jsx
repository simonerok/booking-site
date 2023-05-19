import {
  FormControl,
  Card,
  CardContent,
  TextField,
  FormGroup,
} from "@mui/material";
import InputMask from "react-input-mask";
import { useContext, useRef, useState } from "react";
import styles from "../styles/Form.module.css";
import { PaymentContext } from "@/contexts/ticketContext";
import BookFormContext from "@/contexts/bookFormContext";

export default function FormPay() {
  const ref = useRef(null);
  const inputRef = useRef(null);
  const { paymentInfo, dispatch } = useContext(PaymentContext);

  // const formData = useContext(BookFormContext);

  // console.log(formData);

  // function handleEvent(event) {
  //   console.log(event.target.value);
  // }

  // const [paymentInfo, setPaymentInfo] = useState({
  //   fullname: "",
  //   email: "",
  // });

  //creditcard no state
  const [creditcard, setCreditcard] = useState("");
  const handleCCInput = ({ target: { value } }) => setCreditcard(value);
  //creditcard exp. date state
  const [expDate, setExpDate] = useState("");
  const handleExpInput = ({ target: { value } }) => setExpDate(value);

  //handle Submit get full payload
  function handleSubmit(e) {
    e.preventDefault();

    //dispatch function that returns new state
    dispatch({
      action: "SUBMIT",
      payload: {
        fullname: e.target.name.value,
        email: e.target.email.value,
        card: e.target.standardCard.value,
      },
    });
    console.log(paymentInfo);
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
              <TextField
                id="name"
                label="Name"
                placeholder={"fx: John Doe"}
                required
                // onInput={handleEvent}
              />

              <br></br>
              <TextField
                id="email"
                label="Email"
                placeholder={"fx: JohnDoe@gmail.com"}
                required
              />
              <br></br>
              <TextField
                type="tel"
                id="outlined-required"
                label="Phone"
                maxLength="4"
                pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
                placeholder={"fx: 11111111"}
                required
              />

              <h2>Payment</h2>
              <FormGroup variant="standard" id="paymentInfoGroup">
                <TextField
                  type="text"
                  id="standardCard"
                  label="Credit Card No."
                  required
                  name="creditcard"
                  maxlength="16"
                  value={creditcard}
                  onChange={handleCCInput}
                  variant="outlined"
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
              </FormGroup>
            </CardContent>
          </Card>
        </FormControl>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
