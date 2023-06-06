<template>
    <div class="card flex flex-col text-center justify-center w-56 h-64 bg-white cursor-pointer">
        <i class="pi mb-3 text-6xl text-[chocolate]" :class="card.icon"></i>
        <p class="text-lg h-12">{{ card.text }}</p>
        <span class="text-4xl mt-3">{{ card.level }}</span>
    </div>
</template>

<script>
    export default {
        props:{
            card:{
                type:Object,
                required:true
            }
        }
    }
</script>

<style>

</style>