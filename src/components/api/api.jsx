
import axios from 'axios';

const PORT = 'http://localhost:4000';

export const postCar = async (newCar) => {
    try {
      // fetch data from a url endpoint
      const response = await axios.post(PORT + '/api/addcar', newCar);
      //const data = await response.json();

      return response;
    } catch (error) {
      alert(error); // catches both errors
    }
  }