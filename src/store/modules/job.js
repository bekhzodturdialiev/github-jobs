import JobService from "@/services/JobService.js";

export const namespaced = true;

export const state = {
  jobs: [],
  job: {},
  hasNext: false,
  page: 1
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
  SET_PAGE(state, page) {
    state.page = page;
  }
};
export const actions = {
  fetchJobs: function({ commit, state }, { params = {} }) {
    if (
      params.page === state.page &&
      !params.reload &&
      !params.location &&
      state.jobs.length > 0
    ) {
      return state.jobs;
    }
    return JobService.getJobs(params)
      .then(response => {
        commit("SET_JOBS", response.data);
        commit("SET_PAGE", params.page);
        if (state.jobs.length < 50) {
          commit("SET_HAS_NEXT", false);
        } else {
          commit("SET_HAS_NEXT", true);
        }
      })
      .catch(error => {
        alert("There was a problem fetching jobs: " + error.message);
      });
  },
  fetchJob: function({ commit, getters }, id) {
    var job = getters.getJobById(id);
    if (job) {
      commit("SET_JOB", job);
      return job;
    } else {
      return JobService.getJobById(id)
        .then(response => {
          commit("SET_JOB", response.data);
          return response.data;
        })
        .catch(error => {
          alert("There was a problem fetching job: " + error.message);
        });
    }
  }
};

export const getters = {
  getJobById: state => id => {
    return state.jobs.find(job => job.id === id);
  },
  hasNext: state => {
    return state.hasNext;
  }
};
