<template>
  <div id="app">
    <h1>Sortable Post List</h1>
    <Posts />
  </div>
</template>

<script>
import Posts from "./components/Posts.vue";

export default {
  name: "app",
  components: {
    Posts
  }
};
</script>
