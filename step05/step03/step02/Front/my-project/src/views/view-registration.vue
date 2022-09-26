<template>
    <h1>Please register yourself below</h1>
</template>
<script>
    export default {
        name: 'view-form',
        props: {
            name: String,
        }
    }
</script>
<style>
    #form {
        margin-top: 10%;
        background-color: grey;
        padding: 3% 8%;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    #form div {
        display: flex;
        justify-content: space-between;
    }
    #form div input {
        width:60%;
    }
    #button{
        padding: 1%;
        margin: 1% 35%;
        align-items: center;
    }
</style> 