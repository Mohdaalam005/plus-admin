import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import { LocationDropdown } from "../../components/dropdown/dropdown";

const AddLocation = () => {
  return (
    <Box sx={{ position: "absolute", top: "86px", left: "50px", width: "92%" }}>
      <Box>
        <Navbar></Navbar>
      </Box>
      <Box
        sx={{
          position: "relative",
          right: "35px",
          marginBottom: "50px",
        }}
      >
        <ul>
          <li style={{ fontSize: "23px", color: "#4a4a4a" }}>Add Location</li>
          <li color style={{ color: "grey" }}>
            Portal Name : County Lemke Memorial Hospital
          </li>
          <li style={{ color: "grey" }}>Portal Type : CERNER</li>
          <li style={{ color: "grey" }}>ID: 6003723</li>
        </ul>
      </Box>
      <Box>
        <Grid>
          <TextField size="small" label="Name" type="text" fullWidth />
        </Grid>
        <Stack
          direction={"row"}
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <TextField
            sx={{
              flex: 0.5,
            }}
            size="small"
            label="Suite"
            type="text"
          />
          <TextField
            sx={{
              flex: 1.4,
            }}
            size="small"
            label="Address"
            type="text"
          />
        </Stack>
        <Stack
          direction={"row"}
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <TextField
            sx={{
              flex: 3,
            }}
            size="small"
            label="City"
            type="text"
            fullWidth
          />
          <LocationDropdown />
          <TextField
            sx={{
              flex: 2,
            }}
            size="small"
            label="Zipcode"
            type="text"
            fullWidth
          />
        </Stack>

        <Stack
          direction={"row"}
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <TextField size="small" label="Phone" type="text" fullWidth />
          <TextField size="small" label="Fax" type="text" fullWidth />
          <TextField size="small" label="Email" type="email" fullWidth />
        </Stack>
        <Stack marginTop="50px">
          <TextField size="small" label="Phone" type="text" fullWidth />
        </Stack>
        <Grid
          sx={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "green",
              color: "white",
            }}
            variant="outlined"
          >
            Submit
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddLocation;
