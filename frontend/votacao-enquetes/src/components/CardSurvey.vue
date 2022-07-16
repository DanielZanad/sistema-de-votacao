<template>
  <article class="card-survey" v-for="(survey, id) in surveys" :key="id">
    <h3>{{ survey.titulo }}</h3>
    <p>{{ formatDate(survey.dataInicio) }}</p>
    <button class="main-button" @click="showModalEventEmit(survey)">
      Saiba Mais
    </button>
  </article>
</template>

<script>
export default {
  name: "card-survey",
  props: {
    surveys: Array,
  },
  components: {},
  emits: ["showModalEvent"],
  methods: {
    showModalEventEmit(data) {
      this.$emit("showModalEvent", { data });
      this.showModal();
    },
    formatDate(data) {
      data = new Date(data);
      return data.toLocaleString("pt-BR");
    },
    showModal() {
      const modal = document.getElementById("modal");
      const close = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
      close.onclick =  () => {
        modal.style.display = "none";
      };
      window.onclick = event => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
    test(nome) {
      return nome;
    },
  },
  computed: {},
};
</script>

<style scoped>
.card-survey {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  width: 40%;
  max-width: 200px;
  height: 235px;

  margin-left: 50px;
  margin-top: 35px;
  padding: 25px;
  background-color: #c4d5d7;
  border-radius: 20px;
  box-shadow: 5px 7px 5px rgba(0, 0, 0, 0.356);
}


</style>