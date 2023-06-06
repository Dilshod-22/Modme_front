<template>
  <div class="item flex text-lg px-3 border-b border-black kpy-1">
    <p class="w-52">{{ cost.name }}</p>
    <p class="w-32">{{ cost.date }}</p>
    <p class="w-60">{{ cost.turkum }}</p>
    <p class="w-48">{{ cost.oluvchi }}</p>
    <p class="w-52">{{ cost.price }}</p>
    <p class="w-24 text-center"><i class="pi pi-trash text-[red]"></i></p>
  </div>
</template>

<script>
export default{
    props:{
        cost:{
            type:Object,
            required:true
        }
    }
}
</script>

<style></style>
