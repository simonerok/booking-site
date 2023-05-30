import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { AppBar, Toolbar } from "@mui/material";

/* alle skal indstallere følgende:
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react */

/* Desktop navigation */
export default function NavigationBooking() {
  return (
    <>
      <AppBar position="sticky" className={styles.navMenu}>
        <Toolbar className={styles.navContainer}>
          <Link className={styles.logo} href="./">
            FOO <br /> FESTIVAL
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
