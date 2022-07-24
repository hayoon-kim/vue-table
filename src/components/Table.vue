<template>
  <h4 class="tbl-title">Tablespace inquiry</h4>
  <table class="tbl-list">
    <thead>
      <th v-for="(title, i) in title" :key="i">
        {{ title }}
      </th>
    </thead> 
    <tbody>
      <tr v-for="(inData,i) in inDatas" :key="i" @click="test(inData)">
        <td><BaseInput type="text" :placeholder="`${inData.name}`"/></td>
        <td><BaseInput type="text" :placeholder="`${inData.total}`" /></td>
        <td><BaseInput type="text" :placeholder="`${inData.amount}`" /></td>
        <td><BaseInput type="text" :placeholder="`${inData.remaining}`" /></td>
        <td><BaseInput type="text" :placeholder="`${inData.rate}`" /></td>
        <td>
          <img :src="`${inData.img}`" v-show="inData.isShow==true" :alt="`tableimg${inData.id}`">
          <BaseButton @click.stop="isOpened=true; isClicked=i" v-show="inData.isShow==true">Detail</BaseButton>
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
      isOpened: false, //모달 열렸는지 여부
      isClicked: 0, //열어 볼 모달번호,
      title: ['Tablespace',	'Total capacity(MB)',	'Amount of use(MB)',	'Remaining capacity(MB)',	'Utilization rate of use rate(%)', 'image'],
      inDatas: [
        {
          isShow: true,
          "id" : 0,
          "name": "KIM",
          "total": "TOTALL",
          "amount": "AMOUNTT",
          "remaining": "REMAININGG",
          "rate": "RATEE",
          "img": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "imgDescription": "이미지1에 대한 설명입니다.",
        },
        {
          isShow: false,
          "id" : 1,
          "name": "KIM2",
          "total": "TOTALL",
          "amount": "AMOUNTT",
          "remaining": "REMAININGG",
          "rate": "RATEE",
          "img": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          "imgDescription": "이미지2에 대한 설명입니다.",
        },
        {
          isShow: false,
          "id" : 2,
          "name": "KIM3",
          "total": "TOTALL",
          "amount": "AMOUNTT",
          "remaining": "REMAININGG",
          "rate": "RATEE",
          "img": "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
          "imgDescription": "이미지3에 대한 설명입니다.",
        },
      ]
    }
  },
  methods: {
    test(e){
      console.log(e.name);
      console.log(e.isShow);
      console.log(e.id);
      e.isShow = !e.isShow;
    },
    modalOpen(){
      console.log(this);
    }
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

.tbl-list tr{
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