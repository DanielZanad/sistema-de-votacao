export default {
  REQUEST_ALL_SURVEY_DATA: (state, payload) => {
    state.surveys.push(payload)
  },

  REQUEST_ALL_SURVEY_START: (state, payload) => {
    payload.forEach(element => {
      element.opcoes = element.opcoes.split(";")
    });

    state.surveysToStart.push(payload)
  },

  REQUEST_ALL_SURVEY_STARTED: (state, payload) => {
    payload.forEach(element => {
      element.opcoes = element.opcoes.split(";")
    });

    state.surveysStarted.push(payload)
  },
  
  REQUEST_ALL_SURVEY_FINISHED: (state, payload) => {
    payload.forEach(element => {
      element.opcoes = element.opcoes.split(";")
    });

    state.surveysFinished.push(payload)
  }
}