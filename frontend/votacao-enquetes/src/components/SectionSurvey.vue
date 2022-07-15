<template>
  <section class="main-section survey">
    <article class="main-article start">
      <div class="main-wrap survey-title">
        <h2 class="main-title iniciar">Enquetes para iniciar</h2>
      </div>
      <CardSurvey />
    </article>
    <article class="main-article started">
      <div class="main-wrap survey-title">
        <h2 class="main-title iniciar">Enquetes Iniciadas</h2>
      </div>
      <CardSurvey />
    </article>
    <article class="main-article finished">
      <div class="main-wrap survey-title">
        <h2 class="main-title iniciar">ENquetes Finalizadas</h2>
      </div>

      <CardSurvey />
    </article>
  </section>
</template>

<script>
import CardSurvey from "./CardSurvey.vue";

export default {
  components: { CardSurvey },
};
</script>


<style scoped>
.main-title{
  font-size: large;

}

.main-wrap{

  border-radius: 20px;
  box-shadow: 5px 7px 5px rgba(0, 0, 0, 0.356);
  background-color: #C3CBCB;
  line-height: 50px;
  margin: 25px;
  padding: 10px 10px 10px 25px;

}

</style>
