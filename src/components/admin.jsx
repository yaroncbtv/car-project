import React, { useEffect } from 'react';
import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { carName as carNameAtom } from "./atoms/atoms";
import { carModal as carModalAtom } from "./atoms/atoms";
import { carYear as carYearAtom } from "./atoms/atoms";
//import { allCar as allCarsAtom } from "./atoms/atoms";
import { CarsListState as CarsListStateAtom } from "./atoms/atoms";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { postCar } from './api/api';
// import { allCar } from './api/api';

export const Admin = () => {
    const [carName, setCarName] = useRecoilState(carNameAtom);
    const [carModal, setCarModal] = useRecoilState(carModalAtom);
    const [carYear, setCarYear] = useRecoilState(carYearAtom);
    //const [allCars, setAllCars] = useRecoilState(CarsListStateAtom);
    const [allCars, setAllCars] = useRecoilStateLoadable(CarsListStateAtom);

    useEffect(()  => {
        // const fetchData = async () => {
        //     const cars = await allCar();
        //     await setAllCars(cars)
        //   }

          //fetchData();
    },[]);
    // Object.values(allCars.contents).forEach(val => console.log(val.modal));
    
    
    //console.log(allCars.contents.data)
    if(allCars.contents.data){
        //allCars.contents.data.map(data => console.log(data.modal))
    }    
    

    const handleChangeCarName = (event) => {
        setCarName(event.target.value);
    };
    const handleChangeCarModal = (event) => {
        setCarModal(event.target.value);
    };
    const handleChangeSetCarYear = (event) => {
        setCarYear(event.target.value);
    };
    const addCar = async () => {
        const objCar = {
            name : carName,
            modal : carModal,
            year : carYear
        }
        
       await postCar(objCar);
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
                    value={carName}
                    onChange={handleChangeCarName}
                    helperText="בחר בבקשה את סוג הרכב "
                    variant="outlined"
                >
                    {allCars.contents.data ? allCars.contents.data.map((option) => (
                        <MenuItem key={option.name} value={option.name}>
                            {option.name}
                        </MenuItem>
                    )): null}
                </TextField>

                <TextField
                    style={style.spaceHorizontal}
                    id="modal"
                    select
                    label="דגם"
                    value={carModal}
                    onChange={handleChangeCarModal}
                    helperText="בחר בבקשה את דגם הרכב"
                    variant="outlined"
                >
                    {allCars.contents.data ? allCars.contents.data.map((option) => (
                        <MenuItem key={option.name} value={option.modal}>
                            {option.modal}
                        </MenuItem>
                    )): null}
                </TextField>

                <TextField
                    style={style.spaceHorizontal}
                    id="year"
                    select
                    label="שנה"
                    value={carYear}
                    onChange={handleChangeSetCarYear}
                    helperText="בחר בבקשה את שנת הרכב"
                    variant="outlined"
                >
                    {allCars.contents.data ? allCars.contents.data.map((option) => (
                        <MenuItem key={option.name} value={option.year}>
                            {option.year}
                        </MenuItem>
                    )): null}
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