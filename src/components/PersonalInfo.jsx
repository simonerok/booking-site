import { useContext } from "react";
import { formDataContext } from "@/contexts/bookingContext";
import PI_Formtab from "../components/PI_Formtab";
import MyButton from "./MyButton";
import styles from "../styles/Form.module.css";
import { FormControl, Card, CardContent, TextField, FormGroup } from "@mui/material";

export default function PersonalInfo({ currentStepSetter }) {
  function changeFormComponent() {}
  // //destructure context
  const { formData, dispatch } = useContext(formDataContext);
  //destructure attendees array from formData

  return (
    <>
      <h1 className={styles.h1}>Personal Infomation</h1>
      <FormControl variant="outlined">
        <CardContent className={styles.formWrapper}>
          {/* {attendees.map((attendee, index) => { */}
          <PI_Formtab></PI_Formtab>;{/* })} */}
          <MyButton
            className={styles.form_btn}
            onClick={() => {
              currentStepSetter(2);
            }}
          >
            Next
          </MyButton>
        </CardContent>
      </FormControl>
    </>
  );
}
