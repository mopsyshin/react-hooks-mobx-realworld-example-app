
import axios from "axios";
import { getToken } from 'src/config/auth.config';
import errorHandler from './error.config';

const API_BASE_URL = "https://conduit.productionready.io/api";
const authHeader = {
    "Authorization" : `Token ${getToken()}`
}

export default {
  get: async (path, params) => {
    try {
      return await axios.get(`${API_BASE_URL}${path}`, { params });
    } catch ({response}) {
      return errorHandler(response);
    }
  },
  post: async (path, params) => {
    try {
      return await axios.post(`${API_BASE_URL}${path}`, params);
    } catch ({response}) {
      return errorHandler(response);
    }
  },
  put: async (path, params) => {
    try {
      return await axios.put(`${API_BASE_URL}${path}`, params);
    } catch ({response}) {
      return errorHandler(response);
    }
  },
  delete: async path => {
    try {
      return await axios.delete(`${API_BASE_URL}${path}`);
    } catch ({response}) {
      return errorHandler(response);
    }
  },
  authGet: async (path, params) => {
    try {
      const config = {
        ...params,
        headers: authHeader,
      }
      return await axios.get(`${API_BASE_URL}${path}`, config);
    } catch ({response}) {
      return errorHandler(response);
    }
  },
  authPost: async (path, params) => {
    try {
      return await axios.post(`${API_BASE_URL}${path}`, params, {headers: authHeader});
    } catch ({response}) {
      return errorHandler(response);
    }
  },
  authPut: async (path, params) => {
    try {
      return await axios.put(`${API_BASE_URL}${path}`, params, {headers: authHeader});
    } catch ({response}) {
      return errorHandler(response);
    }
  },
  authDelete: async (path, params) => {
    try {
      const config = {
        ...params,
        headers: authHeader,
      }
      return await axios.delete(`${API_BASE_URL}${path}`, config);
    } catch ({response}) {
      return errorHandler(response);
    }
  },
};
