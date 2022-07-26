<template>
  <div class="resultBox">
    <p>Tablespace: </p>
    <strong>{{inDatas[isClicked].name}}</strong>
    <p>Total capacity(MB)</p>
    <strong>{{inDatas[isClicked].total}}</strong>
    <p>Amount of use(MB)</p>
    <strong>{{inDatas[isClicked].amount}}</strong>
    <p>Remaining capacity(MB)	</p>
    <strong>{{inDatas[isClicked].remaining}}</strong>
    <p>Utilization rate of use rate(%)</p>
    <strong>{{inDatas[isClicked].rate}}</strong>
    <!-- {{inDatas[isClicked].name}} -->
    <!-- {{inDatas[isClicked].name}} -->
  </div>
</template>

<script>
export default {
  name: "TheResult",
  props: {
    isClicked: Number,
    inDatas: Object,
  }
}
</script>

<style>

</style>