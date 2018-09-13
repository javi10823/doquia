import axios from 'axios';

import {
  URL_PREPAIDS,
  URL_SOCIAL_WORKS,
  URL_SPECIALITIES,
} from '../config';

class Service {
  constructor() {
    this.service = axios;
  }

  getSpecialities() {
    return this.service.get(URL_SPECIALITIES);
  }

  getPrepaids() {
    return this.service.get(URL_PREPAIDS);
  }

  getSocialWorks() {
    return this.service.get(URL_SOCIAL_WORKS);
  }

  executeSearch(URL_SEARCH) {
    return this.service.get(URL_SEARCH);
  }
}

export default new Service();
