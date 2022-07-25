<template>
  <h4 class="tbl-title">Tablespace inquiry</h4>
  <table class="tbl-list">
    <thead>
      <th v-for="(title, i) in title" :key="i">
        {{ title }}
      </th>
    </thead> 
    <tbody>
      <tr v-for="(inData,i) in inDatas" :key="i" @click="test(inData,i)">
        <td><BaseInput type="text" v-model="inData.name" :placeholder="`${inData.name}`"/></td>
        <td><BaseInput type="text" v-model="inData.total" :placeholder="`${inData.total}`" /></td>
        <td><BaseInput type="text" v-model="inData.amount" :placeholder="`${inData.amount}`" /></td>
        <td><BaseInput type="text" v-model="inData.remaining" :placeholder="`${inData.remaining}`" /></td>
        <td><BaseInput type="text" v-model="inData.rate" :placeholder="`${inData.rate}`" /></td>
        <td>
          <img :src="`${inData.img}`" 
          v-if="isClicked===i" 
          @click.stop="isOpened=true; isClicked=i"
          :class="isShow==true? selected : ''"
          :alt="`tableimg${inData.id}`">
          <!-- <BaseButton @click.stop="isOpened=true; isClicked=i" v-show="inData.isShow==true">Detail</BaseButton> -->
        </td>
      </tr>
    </tbody>
  </table>

  <BaseButton>Save</BaseButton>
  <!-- <Result /> -->
  <Modal :isOpened="isOpened" @close="isOpened=false" :inDatas="inDatas" :isClicked="isClicked"/>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import Modal from "./Modal.vue";
import data from "../assets/data.js";
// import Result from "./Result.vue"

export default {
  name: 'TheTable',
  data(){
    return {
      // name: "",
      // total: "",
      // amount: "",
      // remaining: "",
      // rate: "",
      // img: "",
      // imgDescription: "",
      selectData:{},
      isOpened: false, //모달 열렸는지 여부
      isClicked: 0, //열어 볼 모달번호,
      title: ['Tablespace',	'Total capacity(MB)',	'Amount of use(MB)',	'Remaining capacity(MB)',	'Utilization rate of use rate(%)', 'image'],
      inDatas: data,
    }
  },
  methods: {
    test(e,i){
      // for(let i=0; i<this.inDatas.length; i++){
      //   this.inDatas[i].isShow=false;
      // }
      // e.isShow=true;
      this.selectData=e;
      this.isClicked=i;
      console.log(this.selectData,'셀렉트데이더')
    },
    modalOpen(){
      console.log(this);
    },
  },
  components: {
    BaseButton: BaseButton,
    BaseInput: BaseInput,
    Modal: Modal,
    // Result: Result,
  },

}
</script>

<style>


* {
  box-sizing: border-box;
  margin: 0;
}

.tbl-title {
  padding: 1rem;
}

.tbl-list {
  width: 100%;
  padding: 20px 5px;
  border-top: 1px solid #ddd;
}

.tbl-list tr {
  width: 100%;
}

.tbl-list td {
  width: 200px;
  height: 120px;
}

.tbl-list td:hover {
  outline: 2px solid #bbb;
}

.tbl-list td:last-child {
  width: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tbl-list td.selected {
  background: red;
}

.tbl-list img {
  width: 100px;
  height: 50px;
  object-fit: cover;
}


.tbl-list input {
  border: none;
  padding: 0.2rem 0.1rem;
  background: inherit;
  cursor: pointer;
}

.tbl-list tr:nth-child(2n-1){
  background-color: #f7f7f7;
}


</style>