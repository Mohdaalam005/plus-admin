import { Box, Stack, Typography } from "@mui/material";
import React from "react";


const Overview = () => {
  return (
    <Box>
      <Box position="relative">
        <Stack direction="row" spacing={40} color="grey">
          <Typography variant="h7" component="p">
            Credentials Type
          </Typography>
          <Typography variant="h7" component="p">
            Status
          </Typography>
        </Stack>
        <Stack direction="row" spacing={43} marginTop="15px">
          <Typography variant="h7" component="p">
            USER_PASS
          </Typography>
          <Typography variant="h7" component="p">
            ACTIVE
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={3} marginTop="25px" fontSize={"21px"}>
          <Typography variant="h7" component="p" color="grey">
            Primary Url :
          </Typography>
          <Typography variant="h7" component="p" color="#4a4a4a">
            http://example.com
          </Typography>
        </Stack>
        <ul
          style={{
            position: "relative",
            right: "39px",
            fontSize: "12px",
            marginTop: "50px",
            color: "grey",
          }}
        >
          <li>Portal Override</li>
          <li>Selenium Options</li>
          <li>Security Questions</li>
          <li>Addtional Information</li>
        </ul>
        <Box height={300}>
          <Typography
            sx={{
              position : "relative",
              right : "43%",
              marginTop: "50px",
              /* font-size: 18px; */
              fontWeight: "bold",
              color: "#4a4a4a",
            }}
          >
            Addtional Information
          </Typography>
          {<PortalLocation/>}
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;

const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];



function PortalLocation() {
  return <Box> {
  
    } </Box>;
}
