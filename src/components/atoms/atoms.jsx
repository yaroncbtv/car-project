import { selector } from 'recoil';
import { selectorFamily } from 'recoil';
import { atom } from 'recoil';
import { atomFamily } from 'recoil';
import { allCar as allCars } from '../api/api';

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
export const allCar = atom({
    key: 'allCar', // unique ID (with respect to other atoms/selectors)
    default: []
    // default value (aka initial value)
});

export const currentCarsIDState = atom({
    key: 'currentCarsIDState',
    default: []
  });

  
  
  export const allCarsState = selector({
    key: "allCarsState",
    get: async ({ get }) => {
      try {
        const response = await allCars();
        // console.log("getUsers called...");
        return response || [];
      } catch (error) {
        console.error(`allUsersState -> getUsers() ERROR: \n${error}`);
        return [];
      }
    }
  });
  
  /**
   * This is the atom the UI components will use to display state.
   */
  export const CarsListState = atom({
    key: "userListState",
    default: allCarsState
  });