<template>
  <section class="main-section survey">
    <article class="main-article start">
      <div class="main-wrap survey-title">
        <h2 class="main-title iniciar">Enquetes para iniciar</h2>
      </div>
      <div class="survey-card">
        <CardSurvey v-if="start" :surveys="surveysToStart" />
      </div>
    </article>
    <article class="main-article started">
      <div class="main-wrap survey-title">
        <h2 class="main-title iniciar">Enquetes Iniciadas</h2>
      </div>
      <div class="survey-card">
        <CardSurvey v-if="started" :surveys="surveysStarted" />
      </div>
    </article>
    <article class="main-article finished">
      <div class="main-wrap survey-title">
        <h2 class="main-title iniciar">Enquetes Finalizadas</h2>
      </div>
      <div class="survey-card">
        <CardSurvey v-if="finished" :surveys="surveysFinished" />
      </div>
    </article>
  </section>
</template>

<script>
import CardSurvey from "./CardSurvey.vue";

export default {
  name: "section-survey",
  data() {
    return {
      start: false,
      started: false,
      finished: false,
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
  
  },
  props: {
    surveys: Array,
    surveysToStart: Array,
    surveysStarted: Array,
    surveysFinished: Array
  },
  components: { CardSurvey },
};
</script>


<style scoped>
.main-title {
  font-size: large;
}

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
