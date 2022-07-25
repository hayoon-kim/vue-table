<template>
  <h3>로그인페이지</h3>
  <form class="loginBox" @submit.prevent="handleSubmit">
      <BaseInput v-model="username" type="email" placeholder="Username" name="username" required/>
      <BaseInput v-model="password" type="password" placeholder="Password" name="password" required/>
      <BaseButton type="submit">Login</BaseButton>
  </form>

</template>

<script>
// import BaseInput from "./BaseInput.vue"
// import BaseButton from "./BaseButton.vue"

export default {
  name: "TheLogin",
//   components: {
//     BaseInput: BaseInput,
//     BaseButton: BaseButton,
// },
//   data(){
//     return {
//       username: "",
//       password: "",
//     }
//   },
  // methods: {
  //   handleSubmit(e){
  //     e.preventDefault();
  //     if( !this.username || !this.password ){
  //       alert('로그인 정보를 입력해주세요.')
  //     } else {
  //       this.$router.push('/table');
  //     }
  //   }
  // }
}
</script>
<script setup>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {
    
//   },
// })

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import BaseInput from "./BaseInput.vue"
import BaseButton from "./BaseButton.vue"

    const username=ref("");
    const password=ref("");
    const router = useRouter();

    const handleSubmit=(e)=>{
      e.preventDefault();
      if( !username.value || !password.value ){
        alert('로그인 정보를 입력해주세요.')
      } else {
        router.push('/table');
      }
    }
</script>

<style scoped>
  .baseBtn {
    width: 80px;
    height: 30px;
    color: white;
    background-color: #027ed2;
    border: none;
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
  }

  .baseBtn:hover {
    transform: scale(1.05);
  }
</style>