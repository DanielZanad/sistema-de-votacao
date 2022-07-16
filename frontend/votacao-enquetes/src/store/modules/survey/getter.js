export default {
  surveyList: state => {
    return state.surveys[0];
  },

  surveyToStartList: state => {
    return state.surveysToStart[0];
  },

  surveyStarted: state => {
    
    return state.surveysStarted[0];
  },

  surveysFinished: state => {
    
    return state.surveysFinished[0];
  },


}