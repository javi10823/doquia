import {
  SET_SPECIALITY,
  SET_PARTICULAR,
  SET_PREPAID,
  SET_PLAN,
  SET_SOCIALWORK,
  SET_COBERTURE,
  SET_RANGE,
  SET_COORDS,
  SET_PREVIOUS_SCREEN,
  SET_SPECIALITIES,
  SET_COBERTURES,
  SET_PREPAIDS,
  SET_SOCIALWORKS,
  SET_PLANS,
} from './types';

import Service from '../provider/Service';

export const setPreviousScreen = (previousScreen) => {
  return {
    type: SET_PREVIOUS_SCREEN,
    payload: previousScreen,
  };
};

export const setCoords = (coords) => {
  return {
    type: SET_COORDS,
    payload: coords,
  };
};

export const setRange = (range) => {
  return {
    type: SET_RANGE,
    payload: range,
  };
};

export const setSpeciality = (speciality) => {
  return {
    type: SET_SPECIALITY,
    payload: speciality,
  };
};

export const setParticular = (particular) => {
  return {
    type: SET_PARTICULAR,
    payload: particular,
  };
};

export const setCoberture = (coberture) => {
  return {
    type: SET_COBERTURE,
    payload: coberture,
  };
};

export const setPrepaid = (prepaid) => {
  return {
    type: SET_PREPAID,
    payload: prepaid,
  };
};

export const setSocialWork = (socialwork) => {
  return {
    type: SET_SOCIALWORK,
    payload: socialwork,
  };
};

export const setPlan = (payload) => {
  return {
    type: SET_PLAN,
    payload,
  };
};

export const setSpecialities = (payload) => {
  return {
    type: SET_SPECIALITIES,
    payload,
  };
};


export const getSpecialities = () => {
  return (dispatch) => {
    return Service.getSpecialities()
      .then((response) => {
        const specialitiesData = response.data;
        const payload = specialitiesData.map((specialities) => {
          return {
            id: specialities._id,
            name: specialities.name,
            checked: false,
          };
        });
        dispatch(setSpecialities(payload));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setCobertures = (payload) => {
  return {
    type: SET_COBERTURES,
    payload,
  };
};

export const getCobertures = () => {
  return (dispatch) => {
    const payload = [{ id: 1, name: 'Obra Social', checked: false },
      { id: 2, name: 'Prepaga', checked: false },
      { id: 3, name: 'Particular', checked: false }];
    dispatch(setCobertures(payload));
  };
};

export const setPrepaids = (payload) => {
  return {
    type: SET_PREPAIDS,
    payload,
  };
};

export const getPrepaids = () => {
  return (dispatch) => {
    return Service.getPrepaids()
      .then((response) => {
        // console.log(response);
        const prepaidsData = response.data;
        const payload = prepaidsData.map((prepaids) => {
          return {
            id: prepaids._id,
            name: prepaids.name,
            plans: prepaids.plans,
            checked: false,
          };
        });
        dispatch(setPrepaids(payload));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export const setSocialWorks = (payload) => {
  return {
    type: SET_SOCIALWORKS,
    payload,
  };
};

export const getSocialWorks = () => {
  return (dispatch) => {
    return Service.getSocialWorks()
      .then((response) => {
      // console.log(response);
        const socialworksData = response.data;
        const payload = socialworksData.map((socialworks) => {
          return {
            id: socialworks._id,
            name: socialworks.name,
            plans: socialworks.plans,
            checked: false,
          };
        });
        dispatch(setSocialWorks(payload));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setPlans = (payload) => {
  return {
    type: SET_PLANS,
    payload,
  };
};


export const getPlans = (plans) => {
  return (dispatch) => {
    const payload = plans.map((plans2) => {
      return {
        id: plans2._id,
        name: plans2.name,
        checked: false,
      };
    });
    dispatch(setPlans(payload));
  };
};
