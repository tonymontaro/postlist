<template>
  <section id="posts">
    <ul>
      <transition-group name="slide">
        <template v-for="(post, index) in posts">
          <Post
            :key="post.id"
            :post="post"
            :index="index"
            :moveUp="moveUp"
            :moveDown="moveDown"
            :isLastPost="index == posts.length - 1 ? true : false"
          />
        </template>
      </transition-group>
    </ul>
  </section>
</template>

<script>
import Post from "./Post";

export default {
  name: "posts",
  components: { Post },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      if (this.posts.length == 0) {
        await this.$store.dispatch("posts/getPosts");
        this.posts = this.$store.state.posts.posts;
      }
    },
    moveUp(idx) {
      if (idx > 0 && idx <= this.posts.length) {
        this.swap(this.posts, idx, idx - 1);
      }
    },
    moveDown(idx) {
      if (idx < this.posts.length - 1 && idx >= 0) {
        this.swap(this.posts, idx, idx + 1);
      }
    },
    swap(arr, x, y) {
      const temp = arr[x];
      arr.splice(x, 1, arr[y]);
      arr.splice(y, 1, temp);
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

.slide-move {
  transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
