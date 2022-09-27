<template>
    <h1>Please register yourself below</h1>
    <form @submit.prevent="createAccount()" id="form">
      <h2>Fill the required fields with your personal informations to create your account</h2>
      <div>
        <label for="firstname">Your Firstname (*) : </label>
        <input type="text" v-model="userdata.firstname" name="firstname" id="firstname" required placeholder="My Firstname">
      </div>
      <div>
        <label for="lastname">Your Lastname (*) : </label>
        <input type="text" v-model="userdata.lastname" name="lastname" id="lastname" required placeholder="My Lastname">
      </div>
      <div>
        <label for="email">Your email (*) : </label>
        <input type="email" v-model="userdata.email" name="email" id="email" required placeholder="Myexample@name.com">
      </div>
      <div>
        <label for="phone">Your phone number (*) : </label>
        <input type="phone" v-model="userdata.phone" name="phone" id="phone" required placeholder="+337 00 00 00 00 or 07 00 00 00 00)">
      </div>
      <span v-if="passwordalert">Alert ! Your passwords doesn't matches</span>
      <div>
        <label for="password">Your Password (*) : </label>
        <input type="password" v-model="userdata.password_once" name="password" class="password" required placeholder="******">
      </div>
      <div>
        <label for="password">Confirm password (*) : </label>
        <input type="password" v-model="userdata.password_twice" name="password" class="password" required placeholder="******">
      </div>
      <div>
        <label for="password">Choose a status for your account ( optional ) : </label>
        <select v-model="userdata.status" name="Status" id="Status">
            <option value="Guest">Guest</option>
            <option value="Customer">Customer</option>
            <option value="Recruiter">Recruiter</option>
        </select>
      </div>
      <input id="button" type="submit" value="Create your account">
    </form>
</template>
<script>
import axios from "axios";

export default {
    name: 'view-registration',
    props: {
        form: Boolean,
    },
    data() {
      return {
        userdata: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            status: '',
            password_once: '',
            password_twice: '',
            passwordalert: false
        }
      }
    },
    methods: {
        createAccount() {
            console.log("La fonction createabout() est lancé à la soumission du formulaire");
            console.log(this.userdata.email);
            if ( this.password_once ===this.password_twice ) {
                console.log("Passwords are the same ");
                const Pass_input = document.getElementsByClassName('password');
                for ( let i=0; i<2; i++) {
                    Pass_input[i].style.border = "1px green solid" 
                }

                /* AXIOS */
                ( async () => {
                    const response = await axios.post('http://localhost:3000/Registration');
                    console.log(response);
                })
                axios({
                method: 'post',
                url: 'http://localhost:3000/Registration',
                data: {
                    Firstname: this.firstname,
                    Lastname: this.lastname,
                    Status: this.status,
                    Email: this.email,
                    Password: this.password_once,
                    Phone: this.phone,
                }
            }).then(response => response.data.id)
                
            }else {
                this.passwordalert = true;
            }
        
      },
    }
}


</script>
<style>
    #form {
        margin-bottom: 10%;
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