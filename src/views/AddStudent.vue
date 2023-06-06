<template>
  <div class="h-screen w-full bg-[#e5e7eb] flex justify-center items-center">
    <div class="w-[460px] h-auto bg-white rounded-lg px-7 my-5">
        <div class="flex justify-between ">
        <h1 class="text-2xl font-sans mt-5">Crearte new student</h1>
        <button class="h-8 w-16 bg-gray-400 text-white rounded mt-4 hover:bg-gray-500 duration-200">
            <router-link
              to="/Dashboard"
            >
            <i class="fas fa-arrow-left text-xl"></i>
            </router-link>
      </button>
    </div>
      <form action="" class="mt-7" @submit.prevent>
        <div class="relative w-full mb-3">
          <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Student name
          </label>
          <input
            type="email"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Student Name"
          />
        </div>
        <div class="relative w-full mb-3 mt-5">
          <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Phone Number
          </label>
          <input
            type="email"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Phone Number"
          />
        </div>
        <div class="relative w-full mb-3 mt-5">
          <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Location
          </label>
          <input
            type="email"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Location"
          />
        </div>
        <div class="relative w-full mb-3 mt-5" v-for="item in count">
          <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Group {{ item }}
          </label>
          <input
            type="email"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Group"
          />
        </div>
        <div class="mt-8" v-if="count < 3">
          <button
            class="w-44 bg-blue-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="button"
            @click="plus"
          >
            Add Group +
          </button>
        </div>

        <div class="relative w-full mb-3 mt-5">
          <label
            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Father or Mather phone number
          </label>
          <input
            type="email"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Phone Number"
          />
        </div>

        <div class="text-center mt-8 mb-6">
          <button
            class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="button"
          >
            Create new student
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },

  methods: {
    plus() {
      return (this.count = this.count + 1);
    },
  },
};
</script>
