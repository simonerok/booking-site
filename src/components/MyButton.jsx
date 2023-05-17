import Button from "@mui/material/Button";

export default function MyButton({ onClick, children }) {
  return (
    <Button
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
