<template>
    <form action="" method="get" id="form">
        <h2>Please fill the fields below to apply the job</h2>
          <div>
            <label for="name">Your name : </label>
            <input type="text" name="name" id="name" required>
          </div>
          <div>
            <label for="email">Your email : </label>
            <input type="email" name="email" id="email" required>
          </div>
          <div>
            <label for="phone">Your phone number : </label>
            <input type="phone" name="phone" id="phone" required>
          </div>
          <div>
            <label for="comment">Please leave us a comment below :</label>
            <input type="text" name="comment" id="comment">
          </div>
          <input id="button" type="submit" value="Send your application">
        </form>
</template>
<script>
    export default {
        name: 'Form_comp',
        props: {
            form: Boolean,
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