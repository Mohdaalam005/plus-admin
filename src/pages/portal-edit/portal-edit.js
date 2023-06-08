import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
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
      <EditPage />
    </Box>
  );
}

export default PortalEdit;

export function EditPage() {
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
    <Box>
      <Grid item>
        <TextField size="small" label="Name" type="text" fullWidth />
      </Grid>

      <Stack
        direction={"row"}
        marginLeft="153px"
        spacing={6}
        marginTop={"40px"}
      >
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
     
      <ul
        style={{
          position: "relative",
          right: "39px",
          fontSize: "15px",
          marginTop: "50px",
          color: "grey",
        }}
      >
        <li>Portal Override</li>
        <li>Selenium Options</li>
        <li>Security Questions</li>
        <li>Addtional Information</li>
      </ul>

      <ul
        style={{
          position: "relative",
          right: "50px",
          fontSize: "15px",
          marginTop: "60px",
        }}
      >
        <li>
         
          <Button variant="text">+ Add Portal Override Field</Button>
        </li>
        <li>
          <Button onClick={addPortal} variant="text" color="primary">
            + Add Selenium Options Field
          </Button>
        </li>
        <li>
          <Button onClick={addPortal} variant="text" color="primary">
            + Add Security Question
          </Button>
        </li>
        <li>
          <Button onClick={addPortal} variant="text" color="primary">
            + Add Additional Info Field
          </Button>
        </li>
      </ul>

      <Grid item>
        {portal.map((portal) => (
          <InputText
            key={portal.id}
            portal={portal}
            removePortal={removePortal}
          />
        ))}
      </Grid>
      <Stack width="150px" marginTop={"42px"} direction="column">
        <Button variant="outlined" sx={{color : 'white' , backgroundColor : 'green' , fontWeight : 'bold'}}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
