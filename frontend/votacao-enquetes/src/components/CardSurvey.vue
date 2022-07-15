<template>
  <article class="card-survey">
    <h3>Titulo da enquete</h3>
    <p>Inicia em ...</p>
    <button class="main-button"> Saiba Mais </button>
  </article>
</template>

<script>

export default {

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