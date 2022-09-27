<template>
    <h1>Please connect to our site</h1>
    <form method="get" id="form">
      <h2>Please fill the fields below to apply the job</h2>
      <div>
        <label for="email">Your email : </label>
        <input type="email" v-model="email" name="email" id="email" required placeholder="Myexample@name.com">
      </div>
      <div>
        <label for="phone">Your password : </label>
        <input type="phone" v-model="phone" name="phone" id="phone" required placeholder="******">
      </div>
      <input id="button" type="submit" value="Send your application">
    </form>
</template>