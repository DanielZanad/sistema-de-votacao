<template>
  <div class="home">
    <h1>Home</h1>
    <SectionSurvey 
    :surveys="surveyComputed" 
    :surveysToStart="surveyToStartComputed"
    :surveysStarted="surveyStartedComputed"
    :surveysFinished="surveyFinishedComputed"
    />
  </div>
</template>

<script>
import SectionSurvey from '../components/SectionSurvey.vue'

export default {
  name: "Home",
  components: {
    SectionSurvey
  },
  data(){
    return{

    }
  },
  
  computed:{
    surveyComputed(){
      return this.$store.getters.surveyList
    },
    surveyToStartComputed(){
      return this.$store.getters.surveyToStartList;
    },
    surveyStartedComputed(){
      return this.$store.getters.surveyStarted;
    },
    surveyFinishedComputed(){
      return this.$store.getters.surveysFinished;
    },
  }
}
</script>

<style>

</style>