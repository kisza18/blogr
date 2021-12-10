<template>
  <div class="bg-gray-100">
    <TheNavbar />
    <TheHeader />
    <Section />
    <SectionTwo />
    <SectionThree />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import TheHeader from "./components/TheHeader";
import Section from "./components/Section";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheHeader,
    Section,
    SectionTwo,
    SectionThree,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

#app {
  font-size: 16px;
  font-family: "Overpass", sans-serif;
  /* font-family: "Ubuntu", sans-serif; */
  overflow: hidden;
}
</style>
