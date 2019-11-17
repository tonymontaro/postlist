<template>
  <section id="posts">
    <ul>
      <template v-for="post in posts">
        <Post :key="post.id" :post="post" />
      </template>
    </ul>
  </section>
</template>

<script>
import Post from "./Post";

export default {
  name: "posts",
  components: { Post },
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      if (this.posts.length == 0) {
        await this.$store.dispatch("posts/getPosts");
      }
    }
  }
};
</script>

<style scoped>
li {
  display: block;
  padding: 20px;
  border: 1px solid gray;
  margin: 5px 0;
  width: 500px;
}
</style>
