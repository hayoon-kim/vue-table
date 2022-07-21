<template>
    <div class="BaseInputBox">
    <label>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
  type: String,
  placeholder: String,
  modelValue: String,
  },  
  methods: {
    input(e){
      console.log(e.target.value);
    }
  }
}
</script>

<style>

</style>