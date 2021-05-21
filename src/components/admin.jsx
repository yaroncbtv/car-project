import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { carName as carNameAtom } from "./atoms/atoms";
import { carModal as carModalAtom } from "./atoms/atoms";
import { carYear as carYearAtom } from "./atoms/atoms";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { postCar } from './api/api';
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
    const [carName, setCarName] = useRecoilState(carNameAtom);
    const [carModal, setCarModal] = useRecoilState(carModalAtom);
    const [carYear, setCarYear] = useRecoilState(carYearAtom);

    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const addCar = async () => {
        const objCar = {
            name : carName,
            modal : carModal,
            year : carYear
        }
       const postCarRes = await postCar(objCar);
       console.log(postCarRes)
    }
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
                <TextField onChange={e => setCarName(e.target.value)} style={style.spaceHorizontal} id="outlined-basic2" label="סוג רכב" variant="outlined" />
                <TextField onChange={e => setCarModal(e.target.value)} style={style.spaceHorizontal} id="outlined-basic2" label="דגם" variant="outlined" />
                <TextField onChange={e => setCarYear(e.target.value)} style={style.spaceHorizontal} id="outlined-basic3" label="שנה" variant="outlined" />
            </div>
            <div style={style.spaceVerticalv}>
                <Button onClick={addCar} variant="contained" color="primary">
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