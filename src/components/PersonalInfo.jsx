import styles from "../styles/Form.module.css";
import { PaymentContext } from "../contexts/ticketContext";
import { useContext, useRef } from "react";
import PI_Formtab from "../components/PI_Formtab";
export default function PersonalInfo() {
  const formsEl = useRef(null);
  const { paymentInfo, dispatch } = useContext(PaymentContext);

  //handle input changes for personal info:
  function handlePIChanges(e) {
    // setFormPayment((prevValues) => ({
    //   ...prevValues,
    //   [name]: value,
    // }));
    dispatch({
      type: "fullname",
      payload: {
        [fullname]: formsEl.current.name.value,
      },
    });
  }
  return (
    <>
      <PI_Formtab title="Person 1"></PI_Formtab>
      <PI_Formtab title="Person 2"></PI_Formtab>
      <button type="next">Next</button>
    </>
  );
}
