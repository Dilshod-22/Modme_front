<template>
  <div>
    <Sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <HeaderStats />
      <div class="px-4 md:px-10 mx-auto w-full mt-8">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from "../components/Sidebar/Sidebar.vue";
import HeaderStats from "../components/Headers/HeaderStats.vue";
</script>
