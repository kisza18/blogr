<template>
  <div class="absolute z-50 header w-full px-6 py-10 overflow-hidden">
    <div
      class="navbar flex items-center justify-between lg:justify-start max-w-7xl mx-auto"
    >
      <div class="logo">
        <img class="w-32" src="../assets/images/logo.svg" alt="logo" />
      </div>
      <!--hamburger icon-->
      <div class="hamburger lg:hidden">
        <button class="toggle focus:outline-none" @click="hamburgerToggle">
          <i
            @click="toggleHamburger"
            v-if="!hamburger"
            class="fal fa-bars text-white text-2xl"
          ></i>
          <i
            @click="toggleHamburger"
            v-if="hamburger"
            class="fal fa-times text-white text-2xl"
          ></i>
        </button>
      </div>
      <!--desktop menu-->
      <div class="menu hidden lg:flex items-center justify-between w-screen">
        <ul class="flex items-center text-gray-200 text-lg ml-12">
          <li class="px-5">
            <a class="hover:text-white hover:underline duration-300" href=""
              >Product</a
            ><i class="fal fa-chevron-down text-xs ml-2 font-bold"></i>
          </li>
          <li class="px-5">
            <a class="hover:text-white hover:underline duration-300" href=""
              >Company</a
            ><i class="fal fa-chevron-down text-xs ml-2 font-bold"></i>
          </li>
          <li class="px-5">
            <a class="hover:text-white hover:underline duration-300" href=""
              >Connect</a
            ><i class="fal fa-chevron-down text-xs ml-2 font-bold"></i>
          </li>
        </ul>
        <div class="flex">
          <button
            class="p-3 text-lg text-gray-200 hover:text-white duration-300 mr-5"
          >
            Login
          </button>
          <button
            class="p-2 text-lg bg-white text-lightRed w-36 rounded-full mx-auto hover:bg-opacity-50 hover:text-white duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- mobile menu -->
  <div
    v-if="hamburger"
    class="mobile absolute z-50 top-28 left-1/2 transform -translate-x-1/2 w-10/12 py-8 bg-gray-200 rounded-md text-center shadow-2xl"
  >
    <ul class="">
      <li class="p-3 text-lg text-gray-700">
        <a href="">Product</a
        ><i
          class="fal fa-chevron-down text-xs ml-2 text-lightRed font-bold"
        ></i>
      </li>
      <li class="p-3 text-lg text-gray-700">
        <a href="">Company</a
        ><i
          class="fal fa-chevron-down text-xs ml-2 text-lightRed font-bold"
        ></i>
      </li>
      <li class="p-3 text-lg text-gray-700">
        <a href="">Connect</a
        ><i
          class="fal fa-chevron-down text-xs ml-2 text-lightRed font-bold"
        ></i>
      </li>
    </ul>
    <div class="h-0.5 bg-gray-300 mx-5 my-3"></div>
    <div class="flex flex-col pb-2">
      <button class="p-3 text-lg text-gray-700">Login</button>
      <button
        class="p-2 text-lg text-white bg-gradient-to-r from-gradientVeryRed to-gradientRed w-36 rounded-full mx-auto"
      >
        Sign Up
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hamburger: false,
    };
  },
  methods: {
    toggleHamburger() {
      this.hamburger = !this.hamburger;
    },
  },
};
</script>
