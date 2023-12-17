"use client"

import React, { useState, ChangeEvent } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

type Props = {
    label: string,
    checked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
}


const ToggleSwitch = ({ label, checked, setChecked }: Props) => {
//   const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          name="toggleSwitch"
          color="primary"
        />
      }
      label={label}
    />
  );
};

export default ToggleSwitch