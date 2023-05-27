import {
  FormControl,
  Card,
  CardContent,
  TextField,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import styles from "../styles/Form.module.css";
import { formDataContext } from "../contexts/bookingContext";
import { useContext, useRef, useState } from "react";
import MyButton from "./MyButton";
export default function FormTab({ setNextStep }) {
  // const { formRef } = props;

  //destructure context
  const { formData, dispatch } = useContext(formDataContext);

  //destructure attendees array from formData
  const { attendees } = formData.formData;
  console.log(formData);
  console.log(attendees, formData.formData.attendees);

  //State variable to track validation errors
  const [fullnameErrors, setFullnameErrors] = useState([]);
  const [emailErrors, setEmailErrors] = useState([]);
  const [phoneErrors, setPhoneErrors] = useState([]);
  //handle input changes for personal info:
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
  // form validation,
  function validateForm() {
    let isFormValid = true;
    //track form Errors across each attendee

    //chatgpt helped
    //check for each attendee in the array of objects whether or not these props has been filled and validate

    //fullname validation
    const newFullnameErrors = formData.formData.attendees.map((attendee) => {
      let errorFullname = false;

      if (!attendee.fullname || !attendee.email || !attendee.phone) {
        isFormValid = false;
      }

      if (!attendee.fullname) {
        errorFullname = true;
        isFormValid = false;

        //return this error
        return { errorFullname };
      }
    });
    setFullnameErrors(newFullnameErrors);

    //email validation
    const newEmailErrors = formData.formData.attendees.map((attendee) => {
      let errorEmail = false;

      if (!attendee.fullname || !attendee.email || !attendee.phone) {
        isFormValid = false;
      }

      if (!attendee.email) {
        errorEmail = true;
        isFormValid = false;

        //return this error
        return { errorEmail };
      }
    });
    setEmailErrors(newEmailErrors);

    //phone
    const newPhoneErrors = formData.formData.attendees.map((attendee) => {
      let errorPhone = false;

      if (!attendee.fullname || !attendee.email || !attendee.phone) {
        isFormValid = false;
      }

      if (!attendee.phone) {
        errorPhone = true;
        isFormValid = false;

        //return this error
        return { errorPhone };
      }
    });

    if (isFormValid) {
      //change to the next component in booking flow if form is valid
      setNextStep(2);
    }
    //update state var with new errors

    setPhoneErrors(newPhoneErrors);
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
                        error={fullnameErrors[index]?.errorFullname} //set error prop based on emailErros array on that index
                        helperText={
                          fullnameErrors[index]?.errorFullname &&
                          "Full Name is required"
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
                        error={emailErrors[index]?.errorEmail} //set error prop based on emailErros array on that index
                        helperText={
                          emailErrors[index]?.errorEmail && "Email is required"
                        }
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
                        error={phoneErrors[index]?.errorPhone}
                        helperText={
                          phoneErrors[index]?.errorPhone &&
                          "Phone number is required"
                        }
                      />
                    </>
                  </CardContent>
                  {/* <button type="next">Submit</button> */}
                </Card>
              </FormControl>
              {/* button to trigger form validation */}
              {/* <MyButton onClick={validateForm}> </MyButton> */}
            </form>
          </AccordionDetails>
        </Accordion>
      ))}
      <MyButton onClick={validateForm}>Submit</MyButton>
    </>
  );
}
