import {
  FormControl,
  Card,
  CardContent,
  TextField,
  FormGroup,
} from "@mui/material";
import { IMaskInput } from "react-imask";
import { useContext, useRef, useState } from "react";
import styles from "../styles/Form.module.css";
import {
  PaymentContext,
  TicketProvider,
  UpdatePaymentContext,
} from "@/contexts/ticketContext";
import BookFormContext from "@/contexts/bookFormContext";

export default function FormPay() {
  const ref = useRef(null);
  const inputRef = useRef(null);
  const paymentInfo = useContext(PaymentContext);
  const dispatch = useContext(UpdatePaymentContext);
  // const formData = useContext(BookFormContext);

  // console.log(formData);

  // function handleEvent(event) {
  //   console.log(event.target.value);
  // }

  // const [paymentInfo, setPaymentInfo] = useState({
  //   fullname: "",
  //   email: "",
  // });
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
                  id="standardCard"
                  label="Credit Card No."
                  placeholder={"fx: XXXX-XXXX-XXXX-XXXX"}
                  required
                />
                <TextField type="month" />

                <IMaskInput
                  mask={Number}
                  radix="."
                  value="222"
                  unmask={true} // true|false|'typed'
                  ref={ref}
                  inputRef={inputRef} // access to nested input
                  // DO NOT USE onChange TO HANDLE CHANGES!
                  // USE onAccept INSTEAD
                  onAccept={
                    // depending on prop above first argument is
                    // `value` if `unmask=false`,
                    // `unmaskedValue` if `unmask=true`,
                    // `typedValue` if `unmask='typed'`
                    (value, mask) => console.log(value)
                  }
                  // ...and more mask props in a guide

                  // input props also available
                  placeholder="Enter number here"
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
