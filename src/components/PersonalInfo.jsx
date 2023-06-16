import PI_Formtab from "../components/PI_Formtab";
import styles from "../styles/Form.module.css";
import { FormControl, CardContent } from "@mui/material";
import BackButton from "./BackButton";
import { useContext, useState, useEffect } from "react";
import { formDataContext } from "@/contexts/bookingContext";
import Alert from "./Alert";

/* Passer timer fra booking display */
export default function PersonalInfo({ currentStepSetter }) {
  /*   if (timerValue === null) {
    return <p>The timer value is null.</p>;
  } */
  const { formData, dispatch } = useContext(formDataContext);
  const [tents2Counter, setTents2Counter] = useState(0); // Counter for 2-person tent
  const [tents3Counter, setTents3Counter] = useState(0);

  /* definere start tid for timeren */
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setTimeout(() => {
            {
              /* redirect til start af booking flow */
              currentStepSetter(0);
            }
          }, 5000);
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  console.log(timer);

  function handlePreviousFormComponent() {
    dispatch({ action: "PREVIOUS" });
    /* dispatch({ action: "CREATE_ATTENDEE_STRUCTURE" }) */
    currentStepSetter(0); //change current step

    /* Resetter counteren på telte, her sættes counteren til 0 */
    setTents2Counter(0);
    setTents3Counter(0);

    /* reset tents2 i dispatch med action og payload*/
    dispatch({ action: "SET_TENTS2_AMOUNT", payload: { tents2Amount: 0 } });

    /* reset tents3 dispatch */
    dispatch({ action: "SET_TENTS3_AMOUNT", payload: { tents3Amount: 0 } });

    /* reset tents checked så den er lukket når der trykkes tilbage */
    dispatch({ action: "TENT_SETUP", payload: { isTentChecked: false } });
  }
  //inline style object to override vercels css
  const inlineStyle = {
    display: "grid",
    placeContent: "center",
  };
  return (
    <>
      <div className={styles.btn_container}>
        <BackButton onClick={handlePreviousFormComponent}>Back</BackButton>
      </div>
      <div className={styles.timer}>
        <p>
          Timer:{" "}
          {timer > 0 ? (
            timer
          ) : (
            <div className={styles.modalContainer}>
              <Alert message="The time is up. Please try again. You are being redirected to start."></Alert>
            </div>
          )}
        </p>
      </div>
      <h1 className={styles.h1}>Personal Infomation</h1>

      <FormControl variant="outlined" style={inlineStyle}>
        <CardContent>
          <PI_Formtab setNextStep={currentStepSetter}></PI_Formtab>
        </CardContent>
      </FormControl>
    </>
  );
}
