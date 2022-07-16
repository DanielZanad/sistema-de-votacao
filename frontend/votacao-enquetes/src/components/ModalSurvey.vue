<template>
  <div id="modal" class="main-modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <header class="modal-header">
        <h1 class="main-title">{{survey.titulo}}</h1>
      </header>
      <body class="modal-body">
        <div class="modal-checkbox" v-for="(opcao, id) in optionsArray" :key="id">
          <label :for="opcao">{{opcao}}</label>
          <input type="checkbox" class="main-checkbox">
          <p>VOTOS.......: 0</p>
        </div>
      </body>
      <footer class="modal-footer">
        <button class="main-button -voted">Votar</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-survey',
  data(){
    return {
      optionsArray: []
    }
  },
  mounted(){
    let interval = setInterval(() => {
      if(this.survey.opcoes !== undefined){
        this.optionsArray = this.survey.opcoes.split(";");
        clearInterval(interval)
      }
    }, 1000);



    
  },
  props:{
    survey: Object
  },
  methods:{
    createOptions(options){
      const optionsArray = options.split(";");
      return optionsArray
    }
  },
  
}
</script>

<style scoped>
.main-modal {
  display: none; 
  position: fixed; 
  z-index: 1; 
  padding-top: 100px;
  
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

.modal-content {
  background-color: #fefefe;
  border-radius: 20px;

  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.modal-body{
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
}
.modal-header{
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
}
.modal-footer{
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
}

.modal-checkbox{
  background-color: #E6E6E6;
  box-shadow: 5px 7px 5px rgba(0, 0, 0, 0.356);
  border-radius: 20px;
  width: 30%;
  margin: 40px;
  max-width: 190px;
  padding: 30px;
}

.main-button.-voted{

  padding: 30px;
  width: 30%;
  margin: 40px;
  font-size: large;
}
body{
  border-radius: 20px;
  background: radial-gradient(azure, #ffffff)
}

</style>