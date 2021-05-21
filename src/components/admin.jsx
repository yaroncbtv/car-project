import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { carInfo as carInfoAtom } from "./atoms";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
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


export const Admin = () => {
    // const [textState, setTextState] = useRecoilState(carInfoAtom);
    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    // useEffect(() => {
    //     setTextState('33333')
    // }, []);


    return (
        <div style={style.root}>
            <div style={style.spaceVertical}>
                <h1>Admin</h1>
                <TextField
                    style={style.spaceHorizontal}
                    id="typeCar"
                    select
                    label="סוג רכב"
                    value={currency}
                    onChange={handleChange}
                    helperText="בחר בבקשה את סוג הרכב "
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    style={style.spaceHorizontal}
                    id="modal"
                    select
                    label="דגם"
                    value={currency}
                    onChange={handleChange}
                    helperText="בחר בבקשה את דגם הרכב"
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    style={style.spaceHorizontal}
                    id="year"
                    select
                    label="שנה"
                    value={currency}
                    onChange={handleChange}
                    helperText="בחר בבקשה את שנת הרכב"
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

            </div>
            <div style={style.spaceVerticalv} >
                <TextField style={style.spaceHorizontal} id="outlined-basic2" label="סוג רכב" variant="outlined" />
                <TextField style={style.spaceHorizontal} id="outlined-basic2" label="דגם" variant="outlined" />
                <TextField style={style.spaceHorizontal} id="outlined-basic3" label="שנה" variant="outlined" />
            </div>
            <div style={style.spaceVerticalv}>
                <Button variant="contained" color="primary">
                    הוסף
                </Button>
            </div>
        </div>
    )
}
const style = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: '30px'
    },
    spaceVertical: {
        margin: '20px'
    },
    spaceHorizontal: {
        margin: '10px'
    }

};