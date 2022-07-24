<template>
  <h3>로그인페이지</h3>
  <form class="loginBox" @submit.prevent="handleSubmit">
      <BaseInput v-model="username" type="email" placeholder="Username" name="username" required/>
      <BaseInput v-model="password" type="password" placeholder="Password" name="password" required/>
      <BaseButton type="submit">Login</BaseButton>
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
    handleSubmit(e){
      e.preventDefault();
      if( !this.username || !this.password ){
        alert('로그인 정보를 입력해주세요.')
      } else {
        this.$router.push('/table');
      }
    }
  }
}
</script>

<style>

</style>