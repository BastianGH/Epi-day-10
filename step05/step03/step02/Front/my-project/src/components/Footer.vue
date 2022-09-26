<template>
    <footer>
        <ul>
            <li><a href="#"> Get JobSeeker premium</a></li>
            <li><a href="#"> Our policy</a></li>
            <li><a href="#"> Contact</a></li>
            <li><a href="#"> Support</a></li>
        </ul>
        <ul>
            <li><a href="#"> Improve your cv</a></li>
            <li><a href="#"> Motivate yourself for grinding</a></li>
        </ul>
    </footer>    
</template>
  
<script>
export default {
    name: 'Footer_comp'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
    background-image: linear-gradient( white 5%, black 95%);
    display: flex;
    justify-content: space-around;
}
ul li{
    list-style: none;
    text-shadow: white 4px 1px 3px ;
}
</style>