<template>
  <div id="app">
    <div class="absolute skewedBox bg-purple-600 z-0 w-full h-full"></div>
    <div class="container m-auto pt-10 ">
      <Posts :class="rowClasses" />
      <Actions :class="rowClasses" />
    </div>
  </div>
</template>

<script>
import Posts from "./components/Posts.vue";
import Actions from "./components/Actions.vue";

export default {
  name: "app",
  data() {
    return {
      rowClasses: [
        "relative",
        "md:w-6/12",
        "md:float-left",
        "p-10",
        "z-auto",
        "object-right",
        "m-auto"
      ]
    };
  },
  components: {
    Posts,
    Actions
  }
};
</script>

<style>
.skewedBox {
  top: -85%;
  transform: skew(0deg, -10deg);
}
</style>
