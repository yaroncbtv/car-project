import { atom } from 'recoil';
  
export const carInfo = atom({
    key: 'carInfo', // unique ID (with respect to other atoms/selectors)
    default: {
        carName: '',
        carModal: '',
        year: '',
    }, // default value (aka initial value)
  });
  