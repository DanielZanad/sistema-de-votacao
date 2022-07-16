export default {
  REQUEST_ALL_SURVEY_DATA: (state, payload) => {
    state.surveys.push(payload)
  },

  REQUEST_ALL_SURVEY_START: (state, payload) => {
    state.surveysToStart.push(payload)
  },

  REQUEST_ALL_SURVEY_STARTED: (state, payload) => {
    state.surveysStarted.push(payload)
  },
  
  REQUEST_ALL_SURVEY_FINISHED: (state, payload) => {
    state.surveysFinished.push(payload)
  }
}