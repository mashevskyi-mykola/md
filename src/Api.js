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
    axios.get('http://my-diners.loc/api/check-node?_format=json', {
      params: params
    })
  }

  loadNodes() {

  }

};
