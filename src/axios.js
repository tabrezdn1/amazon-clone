import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/clone-da269/us-central1/api/test'
    // "http://localhost:5001/clone-da269/us-central1/api/test",
});

export default instance;


