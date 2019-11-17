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
  computed: {
    storePosts() {
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
    },
    moveUp(idx, postId) {
      if (idx > 0 && idx <= this.posts.length) {
        const endIdx = idx - 1;
        const prevState = [...this.posts];
        this.swap(this.posts, idx, endIdx);
        this.addActionToHistory(postId, idx, endIdx, prevState);
      }
    },
    moveDown(idx, postId) {
      if (idx < this.posts.length - 1 && idx >= 0) {
        const endIdx = idx + 1;
        const prevState = [...this.posts];
        this.swap(this.posts, idx, endIdx);
        this.addActionToHistory(postId, idx, endIdx, prevState);
      }
    },
    swap(arr, x, y) {
      const temp = arr[x];
      arr.splice(x, 1, arr[y]);
      arr.splice(y, 1, temp);
    },
    addActionToHistory(postId, idx, endIdx, prevState) {
      const word = `Moved post ${postId} from index ${idx +
        1} to index ${endIdx + 1}`;
      this.$store.commit("history/addAction", { word, prevState });
    }
  },
  watch: {
    storePosts: function() {
      this.posts = this.storePosts;
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
