import {
  FormControl,
  Card,
  CardContent,
  TextField,
  FormGroup,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import styles from "../styles/Form.module.css";
import { formDataContext } from "../contexts/bookingContext";
import { useContext, useRef } from "react";

export default function FormTab({ title, attendee }) {
  const formsEl = useRef(null);
  //destructure context
  const { formData, dispatch } = useContext(formDataContext);

  //destructure attendees array from formData
  const { attendees } = formData.formData;
  console.log(formData);
  console.log(attendees, formData.formData.attendees);

  //handle input changes for personal info:
  function handlePIChanges(index, field, value) {
    // setFormPayment((prevValues) => ({
    //   ...prevValues,
    //   [name]: value,
    // }));
    // e.index, e.target.value;
    dispatch({
      action: "UPDATE_ATTENDEE_FIELD",
      payload: {
        index,
        field,
        value,
      },
    });
  }

  return (
    <>
      {attendees.map((attendee, index) => (
        <Accordion>
          <AccordionSummary>
            Personal data for Person {index + 1}
          </AccordionSummary>
          <AccordionDetails>
            <form>
              <FormControl>
                <Card>
                  <CardContent styles={styles.formWrapper}>
                    <h3>Personal data for Person {index + 1}</h3>

                    <>
                      <TextField
                        key={index}
                        name="fullname"
                        id="fullname"
                        label="Fullname"
                        placeholder={"fx: John Doe"}
                        required
                        value={attendee.fullname}
                        onChange={(e) =>
                          handlePIChanges(index, "fullname", e.target.value)
                        }
                      />

                      <br></br>
                      <TextField
                        name="email"
                        id="email"
                        label="Email"
                        placeholder={"fx: JohnDoe@gmail.com"}
                        required
                        value={attendee.email}
                        onChange={(e) =>
                          handlePIChanges(index, "email", e.target.value)
                        }
                        // error={!!formErrors.email}
                        // helperText={formErrors.email}
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
                        required
                        value={attendee.phone}
                        onChange={(e) =>
                          handlePIChanges(index, "phone", e.target.value)
                        }
                      />
                    </>
                  </CardContent>
                  {/* <button type="next">Submit</button> */}
                </Card>
              </FormControl>
            </form>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
