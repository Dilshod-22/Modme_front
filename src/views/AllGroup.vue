<template>
  <div class="w-full mb-6 rounded pb-7">
    <h1 class="text-center my-7 text-4xl fon-semibold">All groups</h1>
    <div class="grid grid-cols-4 gap-10 h-auto mb-10">
      <div class="bg-white rounded p-5 flex justify-between" v-for="data in datas">
        <h2 class="font-mono font-semibold">{{ data.name }}</h2>
        <h2 class="font-mono font-semibold text-green-700 text-xl">{{ data.count }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const datas = [
  {
    name: "Mathematics",
    count: 4,
  },
  {
    name: "Physics",
    count: 4,
  },
  {
    name: "Biology",
    count: 7,
  },
  {
    name: "Chemistry",
    count: 2,
  },
  {
    name: "Russian language",
    count: 3,
  },
  {
    name: "History",
    count: 6,
  },
];
</script>
