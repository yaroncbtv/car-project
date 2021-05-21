import { atom } from 'recoil';

export const carName = atom({
    key: 'carName', // unique ID (with respect to other atoms/selectors)
    default: ''
    // default value (aka initial value)
});
export const carModal = atom({
    key: 'carModal', // unique ID (with respect to other atoms/selectors)
    default: ''
    // default value (aka initial value)
});
export const carYear = atom({
    key: 'carYear', // unique ID (with respect to other atoms/selectors)
    default: ''
    // default value (aka initial value)
});
