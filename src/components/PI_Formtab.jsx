import { FormControl, Card, CardContent, TextField, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import styles from "../styles/Form.module.css";
import { formDataContext } from "../contexts/bookingContext";
import { useContext, useState } from "react";
import MyButton from "./MyButton";

export default function FormTab({ setNextStep }) {
  // destructure context
  const { formData, dispatch } = useContext(formDataContext);

  // destructure attendees array from formData
  const { attendees } = formData.formData;

  // State variable to track validation errors
  const [inputErrors, setInputErrors] = useState([]);

  // handle input changes for personal info
  function handlePIChanges(index, field, value) {
    dispatch({
      action: "UPDATE_ATTENDEE_FIELD",
      payload: {
        index,
        field,
        value,
      },
    });
  }

  // form validation
  function validateForm() {
    const errors = attendees.map((attendee) => {
      const { fullname, email, phone } = attendee;
      const error = {};

      if (!fullname) {
        error.fullname = "This field is required";
      }

      if (!email || !/.+@.+\..+/.test(email)) {
        error.email = "E-mail is not valid";
      }

      if (!phone) {
        error.phone = "This field is required";
      }

      return error;
    });

    setInputErrors(errors);
    return errors.every((error) => Object.keys(error).length === 0);
  }

  return (
    <>
      {attendees.map((attendee, index) => (
        <Accordion key={index}>
          <AccordionSummary className={styles.overviewText}>Person {index + 1}</AccordionSummary>
          <AccordionDetails>
            <form>
              <FormControl className={styles.formControl} variant="filled">
                <Card>
                  <CardContent>
                    <p> Information</p> <br />
                    <>
                      <TextField name="fullname" label="Full name" placeholder="e.g. John Doe" value={attendee.fullname} onChange={(e) => handlePIChanges(index, "fullname", e.target.value)} error={Boolean(inputErrors[index]?.fullname)} helperText={inputErrors[index]?.fullname} style={{ marginBottom: "1rem" }} />

                      <br />
                      <TextField name="email" label="Email" placeholder="e.g. johndoe@gmail.com" value={attendee.email} onChange={(e) => handlePIChanges(index, "email", e.target.value)} error={Boolean(inputErrors[index]?.email)} helperText={inputErrors[index]?.email} style={{ marginBottom: "1rem" }} />

                      <br />
                      <TextField name="phone" type="tel" label="Phone" inputProps={{ maxLength: 11, minLength: 8, pattern: "[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" }} placeholder="e.g. 11111111" value={attendee.phone} onChange={(e) => handlePIChanges(index, "phone", e.target.value)} error={Boolean(inputErrors[index]?.phone)} helperText={inputErrors[index]?.phone} />
                    </>
                  </CardContent>
                </Card>
              </FormControl>
            </form>
          </AccordionDetails>
        </Accordion>
      ))}
      {/* button to trigger form validation */}
      <div className={styles.btn_container}>
        <MyButton onClick={() => validateForm() && setNextStep(2)}>Next</MyButton>
      </div>
    </>
  );
}
