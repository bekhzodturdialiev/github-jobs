import axios from "axios";
import nProgress from "nprogress";

const apiClient = axios.create({
  baseURL: "https://jobs.github.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
});

apiClient.interceptors.request.use(request => {
  nProgress.start();
  return request;
});

apiClient.interceptors.response.use(response => {
  nProgress.done();
  return response;
});

export default {
  getJobs: function(params) {
    return apiClient.get("/positions.json", {
      params: {
        markdown: false,
        ...params
      }
    });
  },
  getJobById: function(id) {
    // , markdown = false
    // markdown = markdown ? "?markdown=true" : "";
    // + markdown
    return apiClient.get("/positions/" + id + ".json", {
      params: {
        markdown: false
      }
    });
  }
};
