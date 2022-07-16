<template>
  <article class="card-survey" v-for="(survey, id) in surveys" :key="id" >
    <h3>{{survey.titulo}}</h3>
    <p>{{formatDate(survey.dataInicio)}}</p>
    <button class="main-button"> Saiba Mais </button>
  </article>
</template>

<script>

export default {
  name:"card-survey",
  props:{
    surveys: Array
  },
  methods:{
    formatDate(data){
      console.log(this.surveys);
      data = new Date(data)
      return data.toLocaleString('pt-BR');
    }
  }
}
</script>

<style scoped>
.card-survey{
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
  background-color: #C4D5D7;
  border-radius: 20px;
  box-shadow: 5px 7px 5px rgba(0, 0, 0, 0.356);
}

.main-button{
  border: none;
  border-radius: 20px;
  box-shadow: 5px 7px 5px rgba(0, 0, 0, 0.356);
  font-size: 1.1em;
  margin-left: 15px; 
  margin-right: 15px; 
  margin-top: 15px; 
  padding: 10px;
  cursor: pointer;
}

</style>