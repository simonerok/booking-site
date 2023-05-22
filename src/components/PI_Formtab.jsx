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

export default function FormTab({ title }) {
  return (
    <Accordion>
      <AccordionSummary>Person 1</AccordionSummary>
      <AccordionDetails>
        <form>
          <FormControl>
            <Card>
              <CardContent styles={styles.formWrapper}>
                <h3>Personal data</h3>
                <TextField
                  name="fullname"
                  id="fullname"
                  label="Name"
                  placeholder={"fx: John Doe"}
                  required
                  // onChange={handlePIChanges}
                />

                <br></br>
                <TextField
                  name="email"
                  id="email"
                  label="Email"
                  placeholder={"fx: JohnDoe@gmail.com"}
                  required
                  // onChange={handlePIChanges}
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
                  // onChange={handlePIChanges}
                />
              </CardContent>
              {/* <button type="next">Submit</button> */}
            </Card>
          </FormControl>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}
