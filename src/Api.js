export const apiUrl = 'http://my-diners.loc/api/get-nodes?_format=json';
const axios = require('axios');

export default class Api {

  static get apiUrl() {
    return apiUrl;
  }

  constructor() {
    this.url = Api.apiUrl;
    console.log(this.url);
  }

  checkNode(params) {
    console.log(2222222)
    axios.get('http://my-diners.loc/api/check-node?_format=json', {
      params: params
    })
  }

  getkNodes() {
    console.log(2222222)
    axios.get('http://my-diners.loc/api/check-node?_format=json', {
      params: params
    })
  }

};
