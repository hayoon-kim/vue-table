<template>
  <h3>로그인페이지</h3>
  <form v-on:submit.prevent class="loginBox" >
      <BaseInput type="text" placeholder="Username"/>
      {{username}}
      <BaseInput type="password" placeholder="Password"/>
      <BaseButton @click="move('/table')">Login</BaseButton>
  </form>

</template>

<script>
import BaseInput from "./BaseInput.vue"
import BaseButton from "./BaseButton.vue"

export default {
  name: "TheLogin",
  components: {
    BaseInput: BaseInput,
    BaseButton: BaseButton,
},
  data(){
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    move(e){      
        this.$router.push(e);
        console.log(`${e}`);
    }
  }
}
</script>

<style>

</style>