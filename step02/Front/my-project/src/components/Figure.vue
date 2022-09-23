<template>
  <div class="figure">
    <figure :key="index" v-for="(job, index) in jobs">
      <h3>{{ job.Job }}</h3>
      <p v-if="!display">{{ job.ShortDescription }}</p> 
      <div id='hidden_' v-if="display">
        <p>{{ job.LongDescription }}</p>
        <p>{{ job.Wages }}</p>
        <p>{{ job.Place }}</p>
        <p>{{ job.WorkingTime }}</p>
      </div>
      <button type="button" @click="displaymore(index)">Learn more</button>
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
      display: false
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
    displaymore: function(index) {
      if (this.display) {
        this.display = false;
        const button = document.querySelector('button');
        button.innerHTML = "Learn more";
        
      }else {
        this.display = true;
        const button = document.querySelector('button');
        button.innerHTML = "Show less";
      }
      const display = document.getElementById(`hidden_${{index}}`);
      console.log(display)
      console.log(index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.figure {
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
  padding:0 3%;
  position: relative;
}
figure h3 {
  border-bottom: black solid 4px;
  width:150px;
}
figure p {
  text-align: left;
  flex-basis: 70%;
}
figure button {
  background-color: red;
  border-radius: 50px 50px 50px 50px;
  padding: 3% 6%;
  color:white;
}
figure button:hover{
  opacity: 0.5;
}
figure div {
  flex-basis: 70%;
}
</style>
