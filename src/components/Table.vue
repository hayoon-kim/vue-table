<template>
  <h4 class="tbl-title">Tablespace inquiry</h4>
  <table class="tbl-list">
    <thead>
      <th v-for="(title, i) in titles" :key="i">
        {{ title }}
      </th>
    </thead> 
    <tbody>
      <tr v-for="(inData,dataNum) in inDatas" :key="dataNum" @click="selectRow(inData,dataNum);" :class="isClicked==dataNum? 'selected':''">
        <td><BaseInput type="text" v-model="inData.name" :placeholder="`${inData.name}`" required/></td>
        <td><BaseInput type="text" v-model="inData.total" :placeholder="`${inData.total}`" required/></td>
        <td><BaseInput type="text" v-model="inData.amount" :placeholder="`${inData.amount}`" required/></td>
        <td><BaseInput type="text" v-model="inData.remaining" :placeholder="`${inData.remaining}`" required/></td>
        <td><BaseInput type="text" v-model="inData.rate" :placeholder="`${inData.rate}`" required/></td>
        <td>
          <img :src="`${inData.img}`" 
          @click.stop="isOpened=true; isClicked=dataNum"
          v-if="isClicked===dataNum"
          :alt="`tableimg${inData.id}`">
          <!-- <BaseButton @click.stop="isOpened=true; isClicked=i" v-show="inData.isShow==true">Detail</BaseButton> -->
        </td>
      </tr>
    </tbody>
  </table>
  <!-- :disabled="!value 넣어야함 -->
  <BaseButton  :disabled="!inputCheck? true : false">Button</BaseButton> 
  <!-- {{inputCheck}}
  {{inputCheck? true : false}} -->
  <Result :isClicked="isClicked" :inDatas="inDatas" :isOpened="isOpened"/>

  <!-- {{selectData}} -->

  <Modal :isOpened="isOpened" @close="isOpened=false" :inDatas="inDatas" :isClicked="isClicked"/>



</template>

<script>
// import BaseButton from "./BaseButton.vue";
// import BaseInput from "./BaseInput.vue";
// import Modal from "./Modal.vue";
// import data from "../assets/data.js";
// import Result from "./Result.vue"

export default {
  name: 'TheTable',
//   data(){
//     return {
//       selectData:{},
//       isOpened: false, //모달 열렸는지 여부
//       isClicked: 0, //열어 볼 모달번호,
//       title: ['Tablespace',	'Total capacity(MB)',	'Amount of use(MB)',	'Remaining capacity(MB)',	'Utilization rate of use rate(%)', 'image'],
//       inDatas: data,
//     }
//   },
//   methods: {
//     selectRow(clickedData,i){
//       this.selectData=clickedData;
//       this.isClicked=i;
//       console.log(this.selectData,'셀렉트데이더')
//     },
//     modalOpen(){
//       console.log(this);
//     },
//   },
  components: {
    BaseButton: BaseButton,
    BaseInput: BaseInput,
    Modal: Modal,
    Result: Result,
  }
}

// }
</script>

<script setup>
import { ref, reactive, computed } from 'vue';
// import { useRouter } from 'vue-router';

import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import Modal from "./Modal.vue";
import data from "../assets/data.js";
import Result from "./Result.vue";


  const selectData = reactive({});
  const isClicked = ref(0);
  const isOpened = ref(false); //모달 열렸는지 여부
  const titles = ['Tablespace',	'Total capacity(MB)',	'Amount of use(MB)',	'Remaining capacity(MB)',	'Utilization rate of use rate(%)', 'image'];
  const inDatas = ref(data);

  //클릭한 데이터 가지고 오기.
  function selectRow(inData, dataNum){
    // console.log(inData);
    // console.log('데이터넘 '+dataNum);
    // console.log('이즈쇼 '+inData.isShow);
    isClicked.value = dataNum;
    selectData.value = inData;
  }

// const handleButton=computed(function(){
//   let v;
//   for(let key in selectData.value){
//     if(!selectData.value[key]){
//       v=false;
//     }else{
//     v=true;
//     }}
//       return v;
    

//인풋들을 가지고 와서 input 안의 값이 하나라도 length < 1이면 true를 리턴, 아니면 false 리턴.
const inputCheck = computed(()=>{
  // let val;
  // console.log('----------------');
  // for(let key in selectData.value){
  //   console.log(`${key}: ${selectData.value[key]}`);
  //   console.log(`valuelength + ${selectData.value[key].length}`);
  //   if(selectData.value[key] != null && selectData.value[key].length > 1){
  //     val = false;
  //   } else {
  //     val = true;
  //   }
  // }

  return selectData.value

    ? Object.values(selectData.value).every((e) => e !== '')

    : false;

  // console.log(val);
  // return val;
})

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

.tbl-list tr.selected > td {
  background-color: #ddd;
}


</style>