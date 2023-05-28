import Button from "@mui/material/Button";
import styles from "../styles/Form.module.css";

export default function Back({ onClick, children }) {
  return (
    <Button
      className={styles.form_btn}
      variant="text"
      sx={{
        color: "black",
        padding: 0,
        textDecoration: "underline",
        fontSize: "1rem",
        width: 0,
        ":hover": {
          bgcolor: "#DCF2C7",
          border: "none",
          color: "black",
          borderRadius: 0,
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
