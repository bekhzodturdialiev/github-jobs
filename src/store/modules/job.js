import JobService from "@/services/JobService.js";

export const namespaced = true;

export const state = {
  jobs: [],
  jobsTotal: 0,
  job: {},
  hasNext: false,
};
export const mutations = {
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_HAS_NEXT(state, hasNext) {
    state.hasNext = hasNext;
  },
  SET_JOB(state, job) {
    state.job = job;
  },
};
export const actions = {
  fetchJobs: function({ commit }, { params = {} }) {
    return JobService.getJobs(params)
      .then((response) => {
        commit("SET_JOBS", response.data);
        params.page = params.page + 1;
        JobService.getJobs(params).then((response) => {
          commit("SET_HAS_NEXT", response.data.length);
        });
      })
      .catch((error) => {
        alert("There was a problem fetching jobs: " + error.message);
      });
  },
  fetchJob: function({ commit, getters }, id) {
    var job = getters.getJobById(id);
    if (job) {
      commit("SET_JOB", job);
      return job;
    } else {
      return JobService.getEventById(id)
        .then((response) => {
          commit("SET_EVENT", response.data);
          return response.data;
        })
        .catch((error) => {
          alert("There was a problem fetching event: " + error.message);
        });
    }
  },
};

export const getters = {
  getJobById: (state) => (id) => {
    return state.jobs.find((job) => job.id === id);
  },
  hasNext: (state) => {
    return state.hasNext;
  },
};
