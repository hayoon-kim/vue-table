<template>
  <div class="resultBox">
    결과
    <p>{{inDatas[isClicked].name}}</p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "TheResult",
  props: {
    isOpened: Boolean,
    inDatas: Array,
    isClicked: Number,
  }
}
</script>

<style>

</style>