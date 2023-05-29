import Link from "next/link";
import React, { useState } from "react";
import { AppBar, Toolbar, Hidden, Box, IconButton, SwipeableDrawer, Divider, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "@/styles/Home.module.css";

/* alle skal indstallere følgende:
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react */

/* Desktop navigation */
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static" className={styles.navMenu}>
        <Toolbar className={styles.landingButtons}>
          {/*Box hider navmenuen i mobil xs er en mediaQuiery */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href="/booking_display">
              <button>BUY TICKET</button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <button>THE FESTIVAL APP</button>
          </Box>
          {/* smUp betyder at den skal vise burgermenuen */}
          {/* Burger menu */}
          <Box display={{ xs: "block", sm: "none" }}>
            <IconButton className={styles.burgerIcon}>
              {/* Burger ikon */}
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Box>
        </Toolbar>
        <SwipeableDrawer anchor="right" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
          <IconButton className={styles.backIcon}>
            {/* Luk knap */}
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
          <Divider></Divider>
          <List>
            <ListItem>
              <Link href="/booking_display">
                <button>BUY TICKET</button>
              </Link>
            </ListItem>
            <ListItem>
              <button>THE FESTIVAL APP</button>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </AppBar>
    </>
  );
}
