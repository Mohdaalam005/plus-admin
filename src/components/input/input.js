import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function InputText (props) {
  console.log("Input Text", props);
  const { portal, removePortal } = props;

  const handleRemove = () => {
    removePortal(portal.id);
  };
  return (
    <Box>
      <Grid marginTop={"42px"}>
        <Typography
          display="flex"
          float="right"
          variant="h7"
          component="p"
          justifyContent="space-between"
        >
          Portal Override
          <Button onClick={handleRemove}>
            <DeleteIcon />
          </Button>
        </Typography>
        <TextField size="small" label="key" type="text" fullWidth />
      </Grid>
      <Grid>
        <TextField size="small" label="value" type="text" fullWidth />
      </Grid>
    </Box>
  );
};

export default InputText;
