import axios from "axios";

const API_BASE_URL = "https://conduit.productionready.io/api";

const errorHandler = statusCode => {
  switch (statusCode) {
    case 401:
      console.log("Unauthorized request");
      break;
    case 403:
      console.log("Forbidden");
      break;
    case 404:
      console.log("Not found");
      break;
    default:
      console.log("Unknown Error");
      break;
  }
};

export default {
  get: async path => {
    try {
      return await axios.get(`${API_BASE_URL}${path}`);
    } catch (err) {
      errorHandler(err.statusCode);
    }
  },
  post: async (path, params) => {
    try {
      return await axios.post(`${API_BASE_URL}${path}`, { params });
    } catch (err) {
      errorHandler(err.statusCode);
    }
  },
  put: async (path, params) => {
    try {
      return await axios.put(`${API_BASE_URL}${path}`, { params });
    } catch (err) {
      errorHandler(err.statusCode);
    }
  },
  delete: async path => {
    try {
      return await axios.delete(`${API_BASE_URL}${path}`);
    } catch (err) {
      errorHandler(err.statusCode);
    }
  }
};
