import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
const currencies = [
    {
      value: 'פיאט',
      label: 'פיאט',
    },
    {
      value: 'רנו',
      label: 'רנו',
    },
    {
      value: 'ניסאן',
      label: 'ניסאן',
    },
    {
      value: 'פיגו',
      label: 'פיגו',
    },
  ];

export const Search = () => {
    const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  console.log(currency)
    return (
      <div 
      style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: window.innerWidth < 660 ? 'column' : null,
          padding: window.innerWidth < 660 ? '20px' : null
      }}
      >
      <TextField
          id="outlined-select-currency"
          select
          label="סוג רכב"
          value={currency}
          onChange={handleChange}
          helperText="בחר בבקשה את סוג הרכב שברצונך לבדוק"
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="סוג רכב"
          value={currency}
          onChange={handleChange}
          helperText="בחר בבקשה את סוג הרכב שברצונך לבדוק"
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="סוג רכב"
          value={currency}
          onChange={handleChange}
          helperText="בחר בבקשה את סוג הרכב שברצונך לבדוק"
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>  
    );
}