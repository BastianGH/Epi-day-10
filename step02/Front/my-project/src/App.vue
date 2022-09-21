<template>
  <Header_comp msg="Job Seeker" adress="../public/index.html"/> 
  <Main_comp msg="Find your dream's job"/>
  <Footer_comp msg=""/> 
</template>

<script>
import Header_comp from './components/Header.vue';
import Main_comp from './components/Main.vue';
import Footer_comp from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header_comp,
    Main_comp,
    Footer_comp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;    
  color: black;
}
</style>
