import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Grid} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Overview from "../../tab/overview/overview";

const MyTab = () => {

  const [value, setValue] = useState("1");
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/portal-edit/1234");
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box width="80rem">
                <Box
      sx={{
        display: "inline-block",
        float: "right",
        position: "relative",
        top: "9px",
      }}
      >
        <Button
          sx={{
            backgroundColor: "#bd0e0e",
            color: "white",
            "&:hover": {
              color: "white",
              backgroundColor: " red",
            },
          }}
          variant="text"
        >
          Delete
        </Button>
        <Button
          sx={{
            marginLeft: "5px",
            "&:active": {
              color: "white",
              backgroundColor: "green",
            },
            "&:hover": {
              color: "white",
              backgroundColor: "#0a910a",
            },
            backgroundColor: "#2d6a2d",
            color: "white",
          }}
          variant="text"
          onClick={handleClick}
        >
          Edit
        </Button>
      </Box>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Overview" value="1" />
              <Tab label="Json" value="2" />
              <Tab label="History" value="3" />
            </TabList>
             <Grid>
              
             </Grid>
          </Box>
          <TabPanel value="1"><Overview/></TabPanel>
          <TabPanel value="2"><Overview/></TabPanel>
          <TabPanel value="3"><Overview/></TabPanel>
          {/* <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel> */}
          <Box sx={{
          
        }}>
          
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default MyTab;
