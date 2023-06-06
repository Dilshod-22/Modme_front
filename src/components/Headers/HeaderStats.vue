<template>
  <div class="relative bg-emerald-600 h-60 md:pt-16">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <div class="flex flex-wrap ">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Students"
              statTitle="350,897"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="fas fa-users"
              statIconColor="bg-blue-400"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Teacher"
              statTitle="2,356"
              statArrow="down"
              statPercent="3.48"
              statPercentColor="text-red-500"
              statDescripiron=""
              statIconName="fas fa-chalkboard-teacher"
              statIconColor="bg-orange-400"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Profit"
              statTitle="924"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statDescripiron="Since last month"
              statIconName="fas fa-coins"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Employes"
              statTitle="53"
              statArrow=""
              statPercent=""
              statPercentColor="text-white"
              statDescripiron=""
              statIconName="fas fa-user-tie"
              statIconColor="bg-[#0000B1]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";

export default {
  components: {
    CardStats,
  },
};
</script>


<style>
</style>
