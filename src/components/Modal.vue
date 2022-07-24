<template>
  <div name="modal">
    <div v-if="isOpened==true" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>{{inDatas[isClicked].name}}</h3>
          </div>

          <div class="modal-body">
            <img :src="`${inDatas[isClicked].img}`"/>
            <p>{{inDatas[isClicked].imgDescription}}</p>
          </div>

          <div class="modal-footer">
            <BaseButton
              class="modal-default-button"
              @click.stop="$emit('close')"
            >OK</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
    name: "TheModal",
    props: {
        isOpened: Boolean,
        inDatas: Array,
        isClicked: Number,
    },
    components: { BaseButton }
}
</script>

<style>
.modal-mask {
  position: fixed;
  display: flex;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.modal-header h3 {
  color: #027ed2;
}

.modal-body {
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.modal-body img {
  width: 40%;
}

</style>