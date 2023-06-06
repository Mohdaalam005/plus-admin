import { Box, Grid, Stack } from "@mui/material";
import React from "react";

import Navbar from "../../components/navbar/navbar";

import "./portal-page.css";

import MyTab from "../../components/tab/tab";

const PortalPage = () => {
  return (
    <Box sx={{ position: "absolute", top: "86px", left: "50px" }}>
      <Grid>
        <Navbar />
      </Grid>
      <Stack
        spacing={2}
        sx={{
          width: 600,
          height: 300,
        }}
      >
        <ul>
          <li style={{ fontSize: "23px" }}>Portal : eMDs</li>
          <li style={{ fontSize: "16px", color: "grey" }}>Portal Type</li>
          <li>E_MDS</li>
          <li style={{ fontSize: "16px", color: "grey" }}>ID</li>
          <li>1234</li>
        </ul>
      </Stack>
      <Stack>
        <MyTab />
      </Stack>
    </Box>
  );
};

export default PortalPage;
