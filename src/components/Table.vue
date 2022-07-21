<template>
  <h4>Tablespace inquiry</h4>
  <table class="tbl-list">
    <thead>
      <th v-for="(title, i) in title" :key="i" :ref="re">
        {{ title }}
      </th>
    </thead> 
    <tbody>
      <tr v-for="(inData, i) in inDatas" :key="i" @click="test(inData)">
        <td><input type="text" :placeholder="`${inData.name}`"></td>
        <td><input type="text" :placeholder="`${inData.total}`"></td>
        <td><input type="text" :placeholder="`${inData.amount}`"></td>
        <td><input type="text" :placeholder="`${inData.remaining}`"></td>
        <td><input type="text" :placeholder="`${inData.rate}`"></td>
        <td><img :src="`${inData.img}`" v-if="inData.isShow==true" alt="" v-bind:class="{show:isShow}"></td>
      </tr>
    </tbody>
  </table>
  <p :href="`${inDatas.name}`"></p>
</template>

<script>

export default {
  name: 'TheTable',

  data(){
    return {
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
          "imgDescription": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
          "imgDescription": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
          "imgDescription": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

  .tbl-list {
    width: 100%;
    padding: 20px 5px;
    border-top: 1px solid #ddd;
    cursor: pointer;
  }


  .tbl-list td:hover {
    outline: 2px solid #bbb;
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