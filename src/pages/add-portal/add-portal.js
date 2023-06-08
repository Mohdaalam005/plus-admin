import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import { EditPage } from "../portal-edit/portal-edit";

const AddPortal = () => {
  return (
    <Box sx={{ position: "absolute", top: "86px", left: "50px", width: "92%" }}>
      <Grid item>
        <Navbar />
      </Grid>
      <Stack sx={{
        position: "relative",
        right: "45%",
        margin: "22px 0px 37px 0px",
        color : "#4a4a4a"

      }}
      >
        <Typography variant="h5"> Add Portal</Typography>
      </Stack>
      <EditPage />
    </Box>
  );
};

export default AddPortal;
