<template>
    <main>
        <h2>{{ msg }} : </h2>
        <div>
        <Figure_comp/>
        <Form_comp v-if="form"/>
    </div>  
    </main>    
</template>
  
<script>
import Figure_comp from './Figure.vue';
import Form_comp from './Form.vue';

export default {
    name: 'Main_comp',
    props: {
    msg: String
    },
    components: {
    Figure_comp,
    Form_comp
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