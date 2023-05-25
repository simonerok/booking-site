import React, { useContext, useState } from "react";
import { Alert, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import styles from "../styles/Form.module.css";
import { formDataContext } from "@/contexts/bookingContext";
import MyButton from "./MyButton";

export default function OtherOptionsSection({ open, handleInfoClick }) {
  //consume the context
  const { formData, dispatch } = useContext(formDataContext);
  const [counter, setCounter] = useState(0);
  function Increment() {
    setCounter((prevCounter) => prevCounter + 1);
    dispatch({
      action: "UPDATE_FIELD",
      payload: { field: "tents3", value: counter },
    });
  }
  return (
    <>
      <h2 className={styles.h2}>Other options</h2>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Green Option +249,-"
          //send a dispatch on changes
          onChange={(e) => {
            const { checked } = e.target;
            //modified with chatgpt
            dispatch({
              action: "UPDATE_FIELD",
              payload: { field: "green", value: checked },
            });
          }}
        />
        <div className={styles.tentOption}>
          <FormControlLabel
            control={<Checkbox />}
            label="Tent setup"
            onChange={(e) => {
              const { checked } = e.target;
              dispatch({
                action: "UPDATE_FIELD",
                payload: { field: "tent", value: checked },
              });
            }}
          />
          <div onClick={handleInfoClick} style={{ display: "inline-block" }}>
            <div>
              {/* open er en state(fra MainTicket) der tjekker om info beskeden er åben eller ej. && bruges til at render/bygge vores indhold. */}
              {!open && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              )}
            </div>
            {open && (
              <div>
                {/* modal besked med info om priser */}
                <Alert severity="info" sx={{ backgroundColor: "#DCF2C7" }}>
                  2-pers: +299,- <br /> 3-pers: +399,- <br />
                  OBS: Including the tent
                </Alert>
              </div>
            )}
          </div>
        </div>
      </FormGroup>
      {/* 2 personers telt */}

      {/* <FormGroup>
        <div className={styles.addBtnWrapper}>
          <button
            className={styles.addBtn}
            onChange={(e) => {
              const { checked } = e.target;
              dispatch({
                action: "UPDATE_FIELD",
                payload: { field: "tents3", value: checked },
              });
            }}
          />
          <p className={styles.btnText}>2 person tent </p>
        </div>
      </FormGroup> */}

      {/*  const sleepingSpots = formData.tents2 * 2 + formData.tents3 * 3;
            const enabled = formData.ticketAmount <= sleepingSpots && sleepingSpots <= formData.ticketAmount + 1;
            console.log(sleepingSpots); */}

      {/* 3 personer telt */}
      <FormGroup>
        {counter}
        {formData.formData.tents3}
        <div className={styles.addBtnWrapper}>
          <p className={styles.btnText}>3 person tent </p>
          <button
            value={formData.formData.tents3}
            onClick={(e) => {
              e.preventDefault();
              Increment();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </div>
      </FormGroup>
    </>
  );
}
