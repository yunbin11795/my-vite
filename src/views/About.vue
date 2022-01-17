<template>
  <div class="about">
    <el-button @click="test">测试</el-button>
  </div>
</template>

<script lang="ts" setup>
function test() {
  alert(11);
}
</script>

<style scoped lang="scss">
.test {
  text-align: center;

  .main {
    padding-left: 10px;
  }
}
</style>
