<template>
    <header>
        <router-link to="/">
           <h1>{{ msg }}</h1>
            <div v-if="!connected">
                <span>Vous n'êtes pas connecté</span>
                <router-link :to="{ name: 'view-connection', params : {name : 'Connection'}}">Se connecter</router-link>
                <router-link :to="{ name: 'view-registration', params : {name : 'Registration'}}">S'inscrire</router-link>
            </div>
            <div v-else>
                <span>Bienvenue {{ user[0].name }}</span>
                <a v-if="user.status=='Admin'" href="#">Modifier votre base de données</a>
            </div>
        </router-link>
    </header>    
</template>
  
<script>
export default {
    name: 'Header_comp',
    props: {
    msg: String,
    adress: String
    },
    data(){
        return{
            connected: false,
            user: [
                { name: "Bastian", status: "Admin" },
                { name: "Geoffrey", status: "User" },
            ],
        }
    },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    background-image: linear-gradient(0.49turn,grey 15%, red 45%, white 50%);
}
header a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
}
header div a {
    padding:3% 6%;
    border-radius: 20%;
    background-color: #e6e6e6;
    border: blue 2px solid;
}
header div a:hover{
    background-color: grey ;
}
h1{
    text-align: center;
    font-style: italic;
    text-shadow: blue 4px 1px 3px ;
}
</style>
    