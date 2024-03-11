<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import OneClickIRead from './components/OneClickIRead.vue';
import CopyIRead from './components/CopyIRead.vue';
</script>

<template>
  <div id="vue-app">
    <div class="btn-h">
      <OneClickIRead />
      <CopyIRead />
    </div>
  </div>
</template>

<style scoped>
.btn-h {
  display: flex;
  justify-content: center;
  gap: 16px;
}
</style>


