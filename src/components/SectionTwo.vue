<template>
  <div class="containers relative">
    <div class="section absolute bottom-0 w-screen">
      <div
        class="wrapper relative max-w-7xl mx-auto flex flex-col items-center justify-center text-center xl:text-left xl:flex-row xl:justify-end xl:items-center"
      >
        <div class="image absolute z-10 -top-40 xl:top-0 xl:left-16">
          <img
            class="transform xl:scale-125"
            src="../assets/images/illustration-phones.svg"
            alt=""
          />
        </div>
        <div
          class="content px-10 mt-60 sm:mt-96 md:mt-96 xl:w-1/2 xl:mt-40 xl:pl-16 xl:px-0 xl:pr-10"
        >
          <h1 class="text-4xl mb-5 text-white xl:text-5xl">
            State of the Art Infrastructure
          </h1>
          <p class="text-base leading-7 font-thin text-white md:text-lg">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  min-height: 600px;
  max-height: 650px;
  border-bottom-left-radius: 110px;
  border-top-right-radius: 110px;
  background: url("../assets/images/bg-pattern-circles.svg"),
    linear-gradient(to top, hsl(237, 23%, 32%), hsl(237, 17%, 21%));
  background-size: cover;
  background-position: center;
}
.containers {
  min-height: 800px;
  max-height: 1024px;
}
</style>
