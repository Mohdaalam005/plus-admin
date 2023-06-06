import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { Grid } from '@mui/material';

export default function Dropdown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid >
      <FormControl sx={{ m: 1.5, minWidth: 250, position : 'relative' , right : '123px'  }}>
        <Select
        sx={{height : '40px'}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" sx={{fontFamily : 'Instrument Sans'}} >
           Any Type
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>    
        </Select>
      </FormControl>
      </Grid>
  );
}


export function DropdownLocation(){
    const [age, setAge] = React.useState('');

    const handleChange = (event ) => {
      setAge(event.target.value);
    };
    return (
        <Grid >
        <FormControl sx={{ marginTop: '2px', minWidth: 140, position : 'relative' , left : '42px', bottom : '42px'  }}>
          <Select
          sx={{height : '40px'}}
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="" sx={{fontFamily : 'Instrument Sans'}} >
             Locations
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>    
          </Select>
        </FormControl>
        </Grid>
    )
}



export  function DropdownStatus() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid >
      <FormControl sx={{ marginTop: '2px', minWidth: 200, position : 'relative' , right : '150px'  }}>
        <Select
        sx={{height : '40px'}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" sx={{fontFamily : 'Instrument Sans'}} >
           Any Status
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>    
        </Select>
      </FormControl>
      </Grid>
  );
}


export function DropdownCredentials(){
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid >
      <FormControl sx={{ marginTop: '2px', minWidth: 200, position : 'relative' , right : '150px'  }}>
        <Select
        sx={{height : '40px'}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" sx={{fontFamily : 'Instrument Sans'}} >
           Credentials
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>    
        </Select>
      </FormControl>
      </Grid>
  );
}
export function DropdownType(){
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid >
      <FormControl sx={{ marginTop: '2px', minWidth: 200, position : 'relative' , right : '150px'  }}>
        <Select
        sx={{height : '40px'}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" sx={{fontFamily : 'Instrument Sans'}} >
           Type
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>    
        </Select>
      </FormControl>
      </Grid>
  );
}


