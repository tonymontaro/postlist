<template>
  <section id="posts">
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.id }}. {{ post.title }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "posts",
  data() {
    return {
      posts: this.$store.state.posts.posts
    };
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
