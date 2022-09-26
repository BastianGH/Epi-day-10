<template>
  <div id="figure">
    <figure :key="index" v-for="(job, index) in jobs">
      <h3>{{ job.Job }}</h3>
      <p v-bind:id="job.ShortDescription">{{ job.ShortDescription }}</p> 
      <div v-bind:id="index" class="job">
        <p>{{ job.LongDescription }}</p>
        <p>Salaire proprosé : {{ job.Wages }}</p>
        <p>{{ job.Place }}</p>
        <p>Les horaires de travail sont les suivants : {{ job.Workingtime }}</p>
      </div>
      <button class="first-button" type="button" v-bind:id="job.Job" @click="displaymore(index, job.Job, job.ShortDescription)">Learn more</button>
      <button class="second-button" type="button" @click="displayform(index)">Apply this job</button>
    </figure>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Figure_comp',
  data(){
    return{
      jobs: null,
      form: false,
    }
  },  
  mounted(){
    axios
    .get('http://localhost:3000/Advertisements')
    .then((response) => {
      this.jobs = response.data;
      console.log(this.jobs)
    })    
  },
  methods: {
    displaymore: function(item1, item2, item3) {
      let element = document.getElementById(item1);
      let button = document.getElementById(item2);
      let text = document.getElementById(item3);

      if (element) {
        if ( element.style.display == "none" || element.style.display == ""){
          element.style.display = "block";
          text.style.display = "none"
          button.innerHTML = "Show less";
        }else {
          element.style.display = "none";
          text.style.display = "block"
          button.innerHTML = "Learn more";
        }
      }
    },
    displayform: function(index) {
      const chosenjob = index;
      chosenjob;
      console.log(this.form);
      this.form=true;
    }
  }, 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#figure {
  display: flex;
  flex-direction: row;
}
figure {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-basis: 30%;
  border-radius: 50px 50px 50px 50px;
  border: 1px grey solid;
  padding:3% 2%;
  height: min-content;
  gap: 15px;
}
figure h3 {
  border-bottom: black solid 4px;
  width:150px;
  margin:0;
}
figure p {
  text-align: left;
  margin:0;
}
figure .first-button {
  background-color: red;
  border-radius: 50px 50px 50px 50px;
  padding: 3% 6%;
  color:white;
}
figure button:hover{
  opacity: 0.5;
}
figure div p{
  margin: 5% 0;
}
.job {
  display: none;
}
figure .second-button {
  background-color: black;
  color:white;
  padding:3% 8%;
}
</style>
