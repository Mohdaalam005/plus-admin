import { Grid,  Typography } from "@mui/material";
import Navbar from "../../components/navbar/navbar";
import DataTable from "./../../components/table/table";

export default function PendingPortal() {
  return (
    <Grid>
      <Navbar />
      <Grid container>
        <Grid
          item
          className="pendingPortal"
          sx={{
            position: "relative",
            top: "120px",
            fontFamily: "Instrument Sans",
            height: "57px",
            left: "60px",
          }}
        >
          <Typography variant="h5" sx={{fontFamily: "Instrument Sans",}} >Pending Portals</Typography>
        </Grid>
        <DataTable />
      </Grid>
    </Grid>
  );
}
