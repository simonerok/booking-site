import Button from "@mui/material/Button";
import styles from "../styles/Form.module.css";

export default function MyButton({ onClick, children }) {
  return (
    <Button
      type="submit"
      className={styles.form_btn}
      variant="contained"
      sx={{
        borderRadius: 0,
        backgroundColor: "transparent",
        border: "1px solid black",
        boxShadow: "none",
        color: "black",
        ":hover": {
          bgcolor: "#DCF2C7",
          border: "none",
          color: "black",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
