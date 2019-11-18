<template>
  <div id="app">
    <div class="absolute skewedBox bg-purple-600 z-0 w-full h-full"></div>
    <div class="m-auto pt-10 max-w-6xl">
      <Posts :class="rowClasses" />
      <History :class="rowClasses" />
    </div>
  </div>
</template>

<script>
import Posts from "./components/Posts.vue";
import History from "./components/History.vue";

export default {
  name: "app",
  data() {
    return {
      rowClasses: [
        "relative",
        "md:w-6/12",
        "md:float-left",
        "p-5",
        "md:p-10",
        "z-auto",
        "object-right",
        "m-auto"
      ]
    };
  },
  components: {
    Posts,
    History
  }
};
</script>

<style>
.skewedBox {
  top: -85%;
  transform: skew(0deg, -10deg);
}
.white-box {
  min-height: 80px;
  align-items: center;
  display: inline-flex;
}
</style>
