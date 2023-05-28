import PI_Formtab from "../components/PI_Formtab";
import styles from "../styles/Form.module.css";
import { FormControl, CardContent } from "@mui/material";

export default function PersonalInfo({ currentStepSetter }) {
  return (
    <>
      <h1 className={styles.h1}>Personal Infomation</h1>
      <FormControl variant="outlined">
        <CardContent>
          <PI_Formtab setNextStep={currentStepSetter}></PI_Formtab>;
        </CardContent>
      </FormControl>
    </>
  );
}
