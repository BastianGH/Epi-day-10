<template>
  <router-view></router-view>
    <form action="" method="get" id="form">
      <h2>Please fill the fields below to apply the job</h2>
      <div>
        <label for="name">Your name : </label>
        <input type="text" v-model="name" name="name" id="name" required placeholder="My Name">
      </div>
      <div>
        <label for="email">Your email : </label>
        <input type="email" v-model="email" name="email" id="email" required placeholder="Myexample@name.com">
      </div>
      <div>
        <label for="phone">Your phone number : </label>
        <input type="phone" v-model="phone" name="phone" id="phone" required placeholder="+337 00 00 00 00 or 07 00 00 00 00)">
      </div>
      <div>
        <label for="comment">Please leave us a comment below :</label>
        <textarea v-model="message" name="comment" id="comment" cols="30" rows="10" required placeholder="Hi, my name is Mr Name, I would like to apply this Job as I actually am very qualified for this, I have severals years of experiences ..."></textarea>
      </div>
      <input id="button" type="submit" value="Send your application">
    </form>
</template>
<script>
import emailjs from 'emailjs-com';

export default {
    name: 'Form_comp',
    props: {
        form: Boolean,
    },
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    },
    methods: {
      sendEmail() {
        /*
        let data_to_submit = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        };
        
        if ( data_to_submit.name ) {
          console.log("Is data name a not number ? :"+isNaN(data_to_submit.name));
          if ( typeof(data_to_submit.name) !== 'string' || !isNaN(data_to_submit.name) ){
            console.log("Sorry : "+data_to_submit.name+" is not a valid name.");
          }else console.log("Congrats : "+data_to_submit.name+" is a valid name.");
        }else if ( data_to_submit.phone ) {
          console.log("Is data phone not a number ? :"+isNaN(data_to_submit.phone));
          if ( isNaN(data_to_submit.phone) ){
            console.log("Sorry : "+data_to_submit.name+" is not a valid phone number.");
          }else console.log("Congrats : "+data_to_submit.name+" is a valid phone number.");
        }
*/
        try {
        emailjs.send('service_g55gu0p', 'template_2ymozii', {  
          job: this.chosenjob,
          name: this.name,
          message: this.message,
          phone: this.phone,
          email: this.email          
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
        this.phone= ''
        this.name = ''
        this.email = ''
        this.message = ''
      },
    }
}
</script>
<style>
    #form {
        margin-top: 10%;
        background-color: grey;
        padding: 5% 8%;
        height: 400px;
        display: flex;
        flex-direction: column;
        gap:15px;
        border: black 2.5px solid;
        border-radius: 35px 10px 35px 10px;
    }
    #form div {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
    #form div input {
        width:60%;
    }
    #form div:nth-child(5) {
        flex-direction: column;
    }
    #form div:nth-child(5) label {
      align-self: baseline;
    }
    #button{
        padding: 1%;
        margin: 1% 35%;
        align-items: center;
    }
</style>