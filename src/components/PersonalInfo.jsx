import PI_Formtab from "../components/PI_Formtab";
import styles from "../styles/Form.module.css";
import { FormControl, CardContent } from "@mui/material";
import BackButton from "./BackButton";
import { useContext } from "react";
import { formDataContext } from "@/contexts/bookingContext";

export default function PersonalInfo({ currentStepSetter }) {
  const { formData, dispatch } = useContext(formDataContext);

  function handlePreviousFormComponent() {
    dispatch({ action: "PREVIOUS" });
    /* dispatch({ action: "CREATE_ATTENDEE_STRUCTURE" }) */
    currentStepSetter(0); //change current step
  }

  return (
    <>
      <div className={styles.btn_container}>
        <BackButton onClick={handlePreviousFormComponent}>Back</BackButton>
      </div>
      <h1 className={styles.h1}>Personal Infomation</h1>
      <FormControl variant="outlined" className={styles.form}>
        <CardContent>
          <PI_Formtab setNextStep={currentStepSetter}></PI_Formtab>
        </CardContent>
      </FormControl>
    </>
  );
}
