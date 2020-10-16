import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://https://jobs.github.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default {
  getJobs: function(perPage, page) {
    return apiClient.get("/positions.json?page=" + page);
  },
  getJobById: function(id, markdown = false) {
    markdown = markdown ? "?markdown=true" : "";
    return apiClient.get("/positions/" + id + ".json" + markdown);
  },
};
