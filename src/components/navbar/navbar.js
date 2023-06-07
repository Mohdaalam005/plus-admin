import React from "react";
import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/dashboard/placeholder-portals");
  };
  const handleSignOut = () => {
    navigation("/login");
  };
  const handleDashboard = () => {
    navigation("/dashboard");
  };
  return (
    <div>
      <Grid container display="flex">
        <AppBar sx={{ height: "70px", background: "green" }}>
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item>
                <Box
                  sx={{ width: "70px", cursor: "pointer"}}
                  component="img"
                  onClick={handleDashboard}
                  src="https://plus-admin.greenlighthealth.com/images/plus-logo-textonly-ondark.svg "
                />
              </Grid>
              <Grid item sx={{ cursor: "pointer" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  onClick={handleClick}
                >
                  Pending Portal
                </Typography>
              </Grid>

              <Grid item>
                <Grid container direction="row" alignItems="center">
                  <Grid item sx={{ cursor: "pointer" }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1, position: "absolute", right: "30px" }}
                      onClick={handleSignOut}
                    >
                      <LogoutOutlinedIcon
                        sx={{
                          flexGrow: 1,
                          position: "absolute",
                          right: "80px",
                          bottom: "3px",
                        }}
                      />
                      Sign Out
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}
