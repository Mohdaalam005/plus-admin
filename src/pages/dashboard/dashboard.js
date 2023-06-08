import "./dashboard.css";
import Navbar from "././../../components/navbar/navbar";
import { Button, Grid, TextField, Typography, Stack } from "@mui/material";

import Dropdown, {
  DropdownLocation,
  DropdownStatus,
} from "../../components/dropdown/dropdown";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/portal-page");
  };
  const EditPage = () => {
    navigation("/portal-edit");
  };
  const addLocation = () => {
    navigation("/portal/location");
  };

  return (
    <Grid container alignContent="center" justifyContent="center">
      <Grid item lg={12}>
        <Navbar />
      </Grid>
      <Grid
        item
        lg={6}
        className="align"
        alignContent="center"
        justifyContent="center"
        marginLeft="40px"
      >
        <Stack direction="row" pb={1}>
          <Typography variant="h6" sx={{ fontFamily: "Instrument Sans" }}>
            Connection
          </Typography>
        </Stack>
        <TextField
          fullWidth
          size="small"
          label="find by connection id"
          type="search"
          InputProps={{
            classes: {
              notchedOutline: "input-border",
            },
          }}
          InputLabelProps={{
            style: {
              color: "grey",
              fontSize: "15px",
              fontFamily: "Instrument Sans",
              border: "1px 1px grey",
            },
          }}
          sx={{
            "& label.Mui-focused": {
              color: "green",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderWidth: "1px",
              },
            },
          }}
        />
        <Button className="center" variant="outlined" onClick={handleClick}>
          Search
        </Button>
      </Grid>

      <Grid
        item
        lg={6}
        className="align1"
        alignContent="center"
        justifyContent="center"
        marginRight="40px"
      >
        <Stack direction="row" pb={1}>
          <Typography variant="h6" sx={{ fontFamily: "Instrument Sans" }}>
            Ticket
          </Typography>
        </Stack>
        <TextField
          fullWidth
          size="small"
          label="find by user uuid"
          type="search"
          InputLabelProps={{
            style: {
              color: "grey",
              fontSize: "15px",
              fontFamily: "Instrument Sans",
              border: "1px 1px grey",
            },
          }}
        />
        <Button className="center1" variant="outlined">
          Search
        </Button>
      </Grid>

      <Grid
        item
        lg={6}
        className="align2"
        alignContent="center"
        justifyContent="center"
        marginLeft="40px"
      >
        <Stack direction="row" pb={1}>
          <Typography variant="h6" sx={{ fontFamily: "Instrument Sans" }}>
            Portals
          </Typography>
        </Stack>
        <TextField
          fullWidth
          size="small"
          label="search portals..."
          type="search"
          InputProps={{
            classes: {
              notchedOutline: "input-border",
            },
          }}
          InputLabelProps={{
            style: {
              color: "grey",
              fontSize: "15px",
              fontFamily: "Instrument Sans",
              border: "1px 1px grey",
            },
          }}
        />
        <TextField
          sx={{ marginTop: "12px" }}
          fullWidth
          size="small"
          label="search portals by URL..."
          type="search"
          InputProps={{
            classes: {
              notchedOutline: "input-border",
            },
          }}
          InputLabelProps={{
            style: {
              color: "grey",
              fontSize: "15px",
              fontFamily: "Instrument Sans",
              border: "1px 1px grey",
            },
          }}
        />
        <Grid>
          <Dropdown />
          <DropdownStatus />
        </Grid>
        <Stack direction={"column"}spacing={3}>
          <Button className="center2" variant="outlined">
            Search
          </Button>
          <Button variant="outlined" sx={{
            width : "150px"
          }}
          onClick={EditPage}
           >+ Add Portal</Button>
        </Stack>

      </Grid>
      <Grid
        item
        lg={6}
        className="align3"
        alignContent="center"
        justifyContent="center"
        marginLeft="40px"
      >
        <Stack direction="row" pb={1}>
          <Typography variant="h6" sx={{ fontFamily: "Instrument Sans" }}>
            Directory
          </Typography>
        </Stack>
        <TextField
          fullWidth
          size="small"
          label="search portals..."
          type="search"
          InputProps={{
            classes: {
              notchedOutline: "input-border",
            },
          }}
          InputLabelProps={{
            style: {
              color: "grey",
              fontSize: "15px",
              fontFamily: "Instrument Sans",
              border: "1px 1px grey",
            },
          }}
        />
        <TextField
          sx={{ marginTop: "12px", position: "relative", right: "138px" }}
          size="small"
          label="zip code"
          type="search"
          InputProps={{
            classes: {
              notchedOutline: "input-border",
            },
          }}
          InputLabelProps={{
            style: {
              color: "grey",
              fontSize: "15px",
              fontFamily: "Instrument Sans",
              border: "1px 1px grey",
            },
          }}
        />
        <Grid>
          <DropdownLocation />
        </Grid>
        <Stack direction={"column"}spacing={2}>
          <Button className="center3" variant="outlined">
            Search
          </Button>
          <Button
          onClick={addLocation}
           variant="outlined" className="center4" >+ Add Location</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
