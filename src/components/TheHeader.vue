<template>
  <div
    class="containers h-screen bg-gradient-to-b from-gradientVeryRed to-gradientRed overflow-hidden"
  >
    <div class="containers w-full h-screen absolute overflow-hidden">
      <img
        class="image absolute z-0 bottom-0"
        src="../assets/images/bg-pattern-intro.svg"
        alt=""
      />
    </div>
    <div
      class="relative top-1/2 transform -translate-y-1/2 z-10 text-center text-white mx-5 lg:mx-0"
    >
      <h1 class="text-4xl mb-4 md:text-6xl lg:text-7xl">
        A modern<br />
        publishing platform
      </h1>
      <p class="text-sm font-thin mx-12 md:text-xl lg:text-2xl">
        Grow your audience and build your online brand
      </p>
      <div
        class="flex items-center justify-evenly mt-10 md:w-2/3 mx-auto lg:w-96"
      >
        <button
          class="bg-white border-2 border-white w-32 rounded-full text-lightRed py-3 px-5 text-sm md:text-lg md:w-44 hover:bg-opacity-50 hover:text-white duration-300"
        >
          Start for Free
        </button>
        <button
          class="bg-transparent border-2 border-white w-32 rounded-full text-white py-3 px-5 text-sm md:text-lg md:w-44 hover:bg-white hover:text-lightRed duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  scale: 3.5;
}
.containers {
  border-bottom-left-radius: 110px;
  max-height: 1024px;
  min-height: 600px;
}
</style>
