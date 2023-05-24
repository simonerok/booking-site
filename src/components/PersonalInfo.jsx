import styles from "../styles/Form.module.css";
import { useContext } from "react";
import { formDataContext } from "@/contexts/bookingContext";
import PI_Formtab from "../components/PI_Formtab";
import MyButton from "./MyButton";

export default function PersonalInfo({ currentStepSetter }) {
  function changeFormComponent() {}
  // //destructure context
  const { formData, dispatch } = useContext(formDataContext);
  //destructure attendees array from formData
  const { attendees } = formData.formData;
  console.log(formData.formData.attendees);

  return (
    <>
      <h2>Personal Infomation</h2>
      {/* {attendees.map((attendee, index) => { */}
      <PI_Formtab title="Person"></PI_Formtab>;{/* })} */}
      <MyButton
        onClick={() => {
          currentStepSetter(2);
          console.log("clicked next");
        }}
      >
        Next
      </MyButton>
    </>
  );

  attendees.forEach((attendee) => {
    return <PI_Formtab title="Person"></PI_Formtab>;
  });
}
