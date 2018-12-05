<template>
  <div id="app">
    <div class="header">
      <router-link to="/tian" class="button">天地图</router-link>
      <router-link to="/" class="button">高德地图</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="postcss">
html,
body,
#app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
#app {
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
}
.header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    box-sizing: border-box;
    & .button {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        background: #03a9f4;
        padding: 3px 7px;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        font-weight: normal;
    }
    & .button:hover {
        background: #0179af;
    }
}
.content {
    width: 100%;
    height: calc(100%-50px);
}
</style>
