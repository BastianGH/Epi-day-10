<template>
    <main>
        <h2>{{ msg }} : </h2>
        <Figure_comp />
    </main>    
</template>
  
<script>
import Figure_comp from './Figure.vue';

export default {
    name: 'Main_comp',
    props: {
    msg: String
    },
    components: {
    Figure_comp,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
    margin-bottom: 10%;
}
h1{
    text-align: center;
    font-style: italic;
    text-shadow: blue 4px 1px 3px ;
}
</style>