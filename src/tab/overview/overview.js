import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Overview = () => {
  return (
    <Box>

   <Box position="relative">
      <Stack direction="row" spacing={40} color="grey">
            <Typography variant="h7" component="p" >Credentials Type</Typography>
            <Typography variant="h7" component="p" >Status</Typography>
        </Stack>
        <Stack direction="row" spacing={41} marginTop="10px">
            <Typography variant="h6" component="p" >USER_PASS</Typography>
            <Typography variant="h6" component="p" >ACTIVE</Typography>
        </Stack>
   </Box>
           
   </Box>
  )
}

export default Overview
