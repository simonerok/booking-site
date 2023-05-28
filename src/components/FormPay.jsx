import { FormControl, Card, CardContent, TextField, FormGroup } from "@mui/material";
import InputMask from "react-input-mask";
import { useContext, useState, useRef } from "react";
import styles from "../styles/Form.module.css";
import MyButton from "@/components/MyButton";
import { formDataContext } from "@/contexts/bookingContext";

export default function FormPay({ currentStepSetter }) {
  const { formData, dispatch } = useContext(formDataContext); //ticket booking context

  /* SUBMIT TO SUPABASE
   */
  const formRef = useRef(null);

  /* CONFIRM RESERVATION */
  function confirmReservation(e) {
    e.preventDefault();
    const payload = {
      Date: formData.formData.date,
      ticketType: formData.formData.ticketType,
      ticketAmount: formData.formData.ticketAmount,
      area: formData.formData.area,
      attendees: formData.formData.attendees,
      green: formData.formData.green,
      tent: formData.formData.tent,

      tents2: formData.formData.tents2,
      tents3: formData.formData.tents3,
      // id: "",

      ticketPrice: formData.formData.ticketPrice,
    };

    /* Fetcher fra api "confirm-order" */
    fetch("/api/confirm-order", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data, "hej"));

    /* dispatch fetcher data fra udfyldte forms og sender det til api "fullfill-reservation" */
    fetch("http://localhost:8080/fullfill-reservation", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: formData.id,
      }),
    });
    dispatch({ action: "SUBMIT" });
    console.log("THIS IS PAYLOAD", payload);
    currentStepSetter(3);
  }
  console.log(formData);
  /* samled pris af bestilling state */
  const [totalAmount, setTotalAmount] = useState(0);

  function handlePreviousFormComponent() {
    dispatch({ action: "PREVIOUS" });
    /* dispatch({ action: "CREATE_ATTENDEE_STRUCTURE" }); */
    currentStepSetter(1); //change current step
  }

  return (
    <>
      <MyButton onClick={handlePreviousFormComponent}>Back</MyButton>
      <h1 className={styles.h1}>Payment details</h1>
      <section className={styles.body}>
        <article className={styles.overviewContainer}>
          <h2 className={styles.h2}> Overview</h2>
          <p className={styles.p}>Tickets booked: {formData.formData.ticketAmount}</p>
          <p className={styles.p}>Type of tickets: {formData.formData.ticketType}</p>
          <p className={styles.p}>Date: {formData.formData.date}</p>
          <p className={styles.p}>Area: {formData.formData.area}</p>
          <p className={styles.p}>Spots: {formData.formData.ticketAmount}</p>
          <p className={styles.p}>{formData.formData.green ? <p>Green Option</p> : <p></p>}</p>
          <p>{formData.formData.tentSetUp ? <p className={styles.p}>Setup of tent</p> : <p></p>}</p>
          <div>
            {formData.formData.attendees.map((attending, index) => (
              <p key={index}>
                <p className={styles.p}>Attendee {index + 1}</p>
                <p className={styles.p}>Full Name:{attending.fullname}</p>
                <p className={styles.p}>Email:{attending.email}</p>
                <p className={styles.p}>Phone:{attending.phone}</p>
              </p>
            ))}
          </div>
        </article>
      </section>

      <form onSubmit={confirmReservation} className={styles.form} ref={formRef}>
        <FormControl variant="outlined">
          <Card>
            <CardContent className={styles.formWrapper}>
              <h2 className={styles.h2}>Payment</h2>
              <TextField
                name="fullname"
                id="fullname"
                label="Name"
                placeholder={"fx: John Doe"}
                required //onChange={handlePIChanges}
              />

              <br></br>
              <TextField
                name="email"
                id="email"
                label="Email"
                placeholder={"fx: JohnDoe@gmail.com"}
                required //onChange={handlePIChanges} /* error={!!formErrors.email} */ /* helperText={formErrors.email} */
              />
              <br></br>
              <TextField
                name="phone"
                type="tel"
                id="phone"
                label="Phone"
                maxLength="4"
                pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
                placeholder={"fx: 11111111"}
                required //onChange={handlePIChanges}
              />

              <h2 className={styles.h2}>Card Info</h2>
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
                  //value={creditcard}
                  // onChange={handleCCInput}
                  variant="outlined"
                  /* error={!!formErrors.creditcard} */
                  /*    helperText={formErrors.creditcard} */
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
                  required
                  // onChange={handleExpInput}
                  InputProps={{
                    inputComponent: InputMask,
                    inputProps: {
                      mask: "99/99",
                    },
                  }}
                />
                <TextField type="text" name="CVC" label="CVC" min="3" required></TextField>
              </FormGroup>
            </CardContent>
            <div className={styles.btnWrapper}>
              <div className={styles.btn_container}>
                <MyButton type="submit">Submit</MyButton>
              </div>
            </div>
          </Card>
        </FormControl>
      </form>
    </>
  );
}
