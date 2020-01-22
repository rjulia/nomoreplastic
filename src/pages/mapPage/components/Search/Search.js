import React from 'react'
import { Input, InputLabel, MenuItem, FormControl, ListItemText, Select, Checkbox } from '@material-ui/core';
import { TypeRecycling } from "../../../../utils/constants";
import './Search.scss'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 12 + ITEM_PADDING_TOP,
      width: 460,
    },
  },
};

const Search = () => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  return (
    <FormControl className="search" >
      {/* <InputLabel id="kindOfRecycle">What do you want to reclycle</InputLabel>
      <Select
        labelId="kindOfRecycle"
        id="demo-mutiple-checkbox"
        multiple
        value={personName}
        onChange={handleChange}
        input={<Input />}
        renderValue={selected => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {TypeRecycling.map(type => (
          <MenuItem key={type} value={type}>
            <Checkbox checked={personName.indexOf(type) > -1} />
            <ListItemText primary={type} />
          </MenuItem>
        ))}
      </Select> */}
    </FormControl>
  )
}

export default Search
