import { URL_SEARCH } from '../config';
import { EXECUTE_SEARCH } from './types';
import Service from '../provider/Service';

export const executeSearch = payload => ({
  type: EXECUTE_SEARCH,
  payload,
});

export const searchMedicalEstablishments = (specialty,
  particular, range, latitude, longitude, prepaid, plan, socialwork) => {
  const URL = URL_SEARCH;
  let URL_FINAL_SEARCH = URL.replace('PARAM_SPECIALITY', specialty);
  URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_PARTICULAR', particular);
  URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_RANGE', range);
  URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_LATITUDE', latitude);
  URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_LONGITUDE', longitude);
  URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_SOCIALWORK', socialwork);
  URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_PREPAID', prepaid);
  URL_FINAL_SEARCH = URL_FINAL_SEARCH.replace('PARAM_PLAN', plan);

  return dispatch => Service.executeSearch(URL_FINAL_SEARCH)
    .then((response) => {
      const resultsData = response.data;
      const payload = resultsData.map(results => ({
        id: results._id,
        name: results.name,
        description: results.description,
        address: results.address,
        phone: results.phone,
        location: results.location,
        particular: results.particular,
        city: results.city,
        socialWorks: results.socialWorks,
        prepaids: results.prepaids,
        photos: results.photos,
        specialties: results.specialties,
        state: results.state,
      }));
      dispatch(executeSearch(payload));
    })
    .catch((error) => {
      console.log(error);
    });
};
