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
          <img :src="`${inData.img}`" v-if="inData.isShow==true">
          <BaseButton @click="isOpened=true; isClicked=i">Detail</BaseButton>
          <Modal :isOpened="isOpened" @close="isOpened=false" :inDatas="inDatas" :isClicked="isClicked"/>
        </td>
      </tr>
    </tbody>
  </table>
  <BaseButton>Save</BaseButton>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import Modal from "./Modal.vue";

export default {
  name: 'TheTable',
  data(){
    return {
      isOpened: false,
      isClicked: 0,
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
          "img": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
      console.log('--------');
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
},
}
</script>

<style>


* {
  box-sizing: border-box;
}

.tbl-title {
  padding: 1rem;
}

.tbl-list {
  width: 100%;
  padding: 20px 5px;
  border-top: 1px solid #ddd;
  cursor: pointer;
}

.tbl-list td {
  height: 100px;
}

.tbl-list td:hover {
  outline: 2px solid #bbb;
}

.tbl-list td:last-child {
  width: 150px;
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