import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://jobs.github.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default {
  getJobs: function(params) {
    return apiClient.get("/positions.json", {
      params: {
        markdown: true,
        ...params,
      },
    });
  },
  getJobById: function(id) {
    // , markdown = false
    // markdown = markdown ? "?markdown=true" : "";
    // + markdown
    return apiClient.get("/positions/" + id + ".json");
  },
};
