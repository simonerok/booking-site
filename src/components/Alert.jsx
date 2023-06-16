import { Alert } from "@mui/material";

export default function infoMessage({ message }) {
  return (
    <Alert
      severity="info"
      sx={{
        backgroundColor: "#DCF2C7",
        fontSize: "20px",
        padding: "2rem",
      }}
    >
      {message}
    </Alert>
  );
}
