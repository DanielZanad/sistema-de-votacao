<template>
  <section class="main-section survey">
    <article class="main-article start">
      <div class="main-wrap survey-title">
        <h2 class="main-title iniciar">Enquetes para iniciar</h2>
      </div>
      <div class="survey-card">
        <CardSurvey v-if="start" :surveys="surveysToStart" @showModalEvent="showModal($event)"/>
      </div>
    </article>
    <article class="main-article started">
      <div class="main-wrap survey-title">
        <h2 class="main-title iniciar">Enquetes Iniciadas</h2>
      </div>
      <div class="survey-card">
        <CardSurvey v-if="started" :surveys="surveysStarted" @showModalEvent="showModal($event)"/>
      </div>
    </article>
    <article class="main-article finished">
      <div class="main-wrap survey-title">
        <h2 class="main-title iniciar">Enquetes Finalizadas</h2>
      </div>
      <div class="survey-card">
        <CardSurvey v-if="finished" :surveys="surveysFinished" @showModalEvent="showModal($event)"/>
      </div>
    </article>
    <ModalSurvey :survey="dataToModal"/>
  </section>
</template>

<script>

import ModalSurvey from "../components/ModalSurvey.vue";
import CardSurvey from "./CardSurvey.vue";

export default {
  name: "section-survey",
  data() {
    return {
      start: false,
      started: false,
      finished: false,
      dataToModal: []
    };
  },
  mounted() {
    let interval = setInterval(() => {
      if (this.surveys !== undefined) {
        this.start = true;
        this.started = true;
        this.finished = true;
        
        clearInterval(interval);
      }
    }, 100);
  },
  methods: {
    showModal($event){
      this.dataToModal = $event.data
    }
  },
  props: {
    surveys: Array,
    surveysToStart: Array,
    surveysStarted: Array,
    surveysFinished: Array
  },
  components: { CardSurvey, ModalSurvey },
};
</script>


<style scoped>


.survey-card {
  display: flex;
  justify-content: flex-start;
}

.main-wrap.survey-title {
  border-radius: 20px;
  box-shadow: 5px 7px 5px rgba(0, 0, 0, 0.356);
  
  background-color: #c3cbcb;
  line-height: 50px;
  margin: 25px;
  padding: 10px 10px 10px 25px;
  
}
</style>
