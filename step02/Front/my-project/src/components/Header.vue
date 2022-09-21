<template>
    <header>
        <a href="{{ adress }}">
            <h1>{{ msg }}</h1>   
        </a>         
    </header>    
</template>
  
<script>
export default {
    name: 'Header_comp',
    props: {
    msg: String,
    adress: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    background-image: linear-gradient(0.49turn,grey 15%, red 45%, white 50%);
    display: flex;
    justify-content: center;
}
h1{
    text-align: center;
    font-style: italic;
    text-shadow: blue 4px 1px 3px ;
}
</style>
    