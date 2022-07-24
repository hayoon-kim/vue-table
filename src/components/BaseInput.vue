<template>
    <div class="BaseInputBox">
    <label>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateInput"
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
    updateInput(e){
      this.$emit("update:modelValue", e.target.value)
    }
  }
}
</script>

<style>

</style>