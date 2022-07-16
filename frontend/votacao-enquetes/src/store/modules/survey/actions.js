import axios from 'axios'
const resourceUrl = "http://localhost:3000/enquetes";

export default {
  async requestAllSurveyData(context){
    const response = await axios.get(resourceUrl);
    const payload = response.data;
    context.commit('REQUEST_ALL_SURVEY_DATA', payload);
  },

  async requestAllSurveyStart(context){
    const response = await axios.get(resourceUrl + "/iniciar");
    const payload = response.data;
    context.commit('REQUEST_ALL_SURVEY_START', payload);
  },

  async requestAllSurveyStarted(context){
    const response = await axios.get(resourceUrl + "/iniciadas");
    const payload = response.data;
    context.commit('REQUEST_ALL_SURVEY_STARTED', payload);
  },

  async requestAllSurveyFinished(context){
    const response = await axios.get(resourceUrl + "/finalizadas");
    const payload = response.data;
    context.commit('REQUEST_ALL_SURVEY_FINISHED', payload);
  }
}