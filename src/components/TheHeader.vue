<template>
  <div class="headerContainer">
    <header class="header">
      <router-link to="/" class="logo">NADIA</router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.headerContainer {
  width: 100%;
  background: #2751f3;
}

.header {
  width: 100%;
  height: 65px;
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.logo {
  text-decoration: none;
  color: white;
  font-weight: 100;
  font-size: 24px;
}
</style>