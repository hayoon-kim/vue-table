<template>
    <div class="BaseInputBox">
    <label>
      <input
        :type="type"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
  type: String,
  placeholder: String
  }
}
</script>

<style>

</style>