<template>
  <button class="baseBtn" >
    <!-- buttontext in slot -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
}
</script>

<style>
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