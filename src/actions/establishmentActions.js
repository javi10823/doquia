import axios from 'axios';
import { SET_ESTABLISHMENT } from './types';
import { URL_REPORT } from '../config';

export const setEstablishment = establishment => ({
  type: SET_ESTABLISHMENT,
  payload: establishment,
});

export const sendReport = (establishment, latitude, longitude, status, comment) => {
  return axios.post(URL_REPORT, {
    establishment, // asi anda:  5aaacfb561936504eaf6fc2b
    latitude,
    longitude,
    type: status,
    comment,
  });
};
