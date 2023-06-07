import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";

import "./portal-edit.css";
import {
  DropdownCredentials,
  DropdownStatus,
  DropdownType,
} from "../../components/dropdown/dropdown";

import InputText from "../../components/input/input";

function PortalEdit() {
  const [portal, setPortal] = useState([]);

  const addPortal = () => {
    setPortal((prevPortals) => [
      ...prevPortals,
      { id: prevPortals.length + 1 },
    ]);
    console.log(portal + "set portal");
  };

  const removePortal = (id) => {
    setPortal((prevPortals) =>
      prevPortals.filter((portal) => portal.id !== id)
    );
  };
  console.log(portal);
  return (
    <Box sx={{ position: "absolute", top: "86px", left: "50px", width: "92%" }}>
      <Grid item>
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

      <Grid item>
        <TextField size="small" label="Name" type="text" fullWidth />
      </Grid>

      <Stack direction={"row"} marginLeft="12%" spacing={6} marginTop={"40px"}>
        <DropdownType />
        <DropdownCredentials />
        <DropdownStatus />
      </Stack>
      
      <Grid item marginTop={"42px"}>
        <TextField size="small" label="Primary Url" type="text" fullWidth />
      </Grid>
      <Grid item marginTop={"42px"}>
        <TextField size="small" label="Comment" type="text" fullWidth />
      </Grid>
      <Stack width="150px" marginTop={"42px"} direction="column">
        <Button variant="outlined" color="primary">
          Submit
        </Button>
      </Stack>
      <Stack width="150px" marginTop={"42px"} direction="column">
        <Button
          onClick={addPortal}
          sx={{ width: "167px" }}
          variant="text"
          color="primary"
        >
          + Portal Override
        </Button>
      </Stack>
      <Grid item
      >
        {portal.map((portal) => (
          <InputText
            key={portal.id}
            portal={portal}
            removePortal={removePortal}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default PortalEdit;
