import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../../components/navbar/navbar";

import "./portal-edit.css";
import {
  DropdownCredentials,
  DropdownStatus,
  DropdownType,
} from "../../../components/dropdown/dropdown";

import InputText from "../../../components/input/input";

const PortalEdit = () => {
    const [portal , setPortal] = useState([])
    
    const addPortal = () => {
        
        setPortal([...portal, <InputText key={portal.length} onRemove={() => removePortal(portal.length)} />]  );
    }
    const removePortal = (index) => {
        const updatedPortals = portal.filter((_, i) => i !== index);
        setPortal(updatedPortals);
      };
      
      
  return (
    <Box sx={{ position: "absolute", top: "86px", left: "50px", width: "92%" }}>
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

      <Grid>
        <TextField size="small" label="Name" type="text" fullWidth />
      </Grid>

      <Stack direction={"row"} marginLeft="12%" spacing={6} marginTop={"40px"}>
        <DropdownType />
        <DropdownCredentials />
        <DropdownStatus />
      </Stack>
      <Grid marginTop={"42px"}>
        <TextField size="small" label="Primary Url" type="text" fullWidth />
      </Grid>
      <Grid marginTop={"42px"}>
        <TextField size="small" label="Comment" type="text" fullWidth />
      </Grid>
      <Stack width="150px" marginTop={"42px"} direction="column">
        <Button variant="outlined" color="primary"> Submit</Button>
      </Stack>
      <Stack width="150px" marginTop={"42px"} direction="column">
        <Button onClick={addPortal} sx={{width : '167px'}} variant="text" color="primary"> + Portal Override</Button>
      </Stack>
      <Grid>
      {portal.map((portalIndex) => (
        <InputText key={portalIndex} onRemove={() => removePortal(portalIndex)} />
      ))}
      </Grid>
      
    </Box>
  );
};

export default PortalEdit;
