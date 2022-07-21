<template>
    <TheHeader />
    <BaseButton @click="move('/login')">LoginPage</BaseButton>
    <BaseButton @click="move('/table')">TheTable</BaseButton>
</template>

<script>
import TheHeader from "./TheHeader.vue"
import BaseButton from "./BaseButton.vue"

export default {
  name: "TheMain",
  components: {
    TheHeader: TheHeader,
    BaseButton: BaseButton,
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