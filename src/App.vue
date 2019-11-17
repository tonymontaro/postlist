<template>
  <div id="app">
    <Posts />
    <Actions />
  </div>
</template>

<script>
import Posts from "./components/Posts.vue";
import Actions from "./components/Actions.vue";

export default {
  name: "app",
  components: {
    Posts,
    Actions
  }
};
</script>

<style>
#actions,
#posts {
  width: 49%;
  float: left;
}
</style>
