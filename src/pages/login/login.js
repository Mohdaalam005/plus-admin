import { useState } from "react";
import "./login.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigation = useNavigate();
  const [username, setUserName] = useState("");

  const handleClick = () => {
    navigation("/dashboard");
  };
  return (
    <div className="boxstyle">
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        rowSpacing={2}
        width="80%"
      >
        <Grid item>
          <Box
            component="img"
            src="	https://idp.greenlighthealth.com/assets/images/greenlight-health/GL-logo-horz-280x56.svg"
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <Typography
            sx={{ fontSize: "17px", marginBottom: "7px", m: "5" }}
            variant="h6"
          >
            Enter your Greenlight credentials
          </Typography>
        </Grid>
        <Grid item lg={10} md={12} xs={12}>
          <TextField
            fullWidth
            required
            id="outlined-username-input"
            label="username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            error={username && username.length < 4 ? true : false}
            helperText={
              username && username.length === 0
                ? "the username is not empty"
                : ""
            }
          />
        </Grid>
        <Grid item lg={10} md={12} xs={12}>
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="password"
          />
        </Grid>
        <Grid item lg={4} md={12} xs={12}>
          <Button
            fullWidth
            sx={{ marginTop: "3px" }}
            onClick={handleClick}
            variant="contained"
            color="success"
          >
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
