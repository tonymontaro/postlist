<template>
  <section id="posts">
    <h1>Sortable Post List</h1>
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
        const postId = this.posts[idx].id;
        const endIdx = idx - 1;
        this.swap(this.posts, idx, endIdx);
        this.addActionToHistory(postId, idx, endIdx);
      }
    },
    moveDown(idx) {
      if (idx < this.posts.length - 1 && idx >= 0) {
        const postId = this.posts[idx].id;
        const endIdx = idx + 1;
        this.swap(this.posts, idx, idx + 1);
        this.addActionToHistory(postId, idx, endIdx);
      }
    },
    swap(arr, x, y) {
      const temp = arr[x];
      arr.splice(x, 1, arr[y]);
      arr.splice(y, 1, temp);
    },
    addActionToHistory(postId, idx, endIdx) {
      this.$store.commit("history/addAction", {
        postId,
        idx,
        endIdx,
        posts: [...this.posts]
      });
    }
  }
};
</script>

<style scoped>
li {
  display: block;
  padding: 20px;
  border: 1px solid gray;
  margin: 15px 0;
  width: 100%;
  box-sizing: border-box;
}

.slide-move {
  transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
