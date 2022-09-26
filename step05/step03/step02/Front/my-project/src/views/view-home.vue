<template>
    <Main_comp msg="Find your dream's job"/>
</template>
  
  <script>
  import Main_comp from '../components/Main.vue'; 
  
  export default {
    name: 'view-home',
    components: {
      Main_comp
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
  