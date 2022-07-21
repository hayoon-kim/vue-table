<template>
  <button :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
}
</script>

<style>

</style>