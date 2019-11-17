<template>
  <li class="post">
    Post {{ post.id }}
    <br />
    <button v-if="index > 0" @click="() => moveUp(index)">up</button>
    <button v-if="!isLastPost" @click="() => moveDown(index)">down</button>
  </li>
</template>

<script>
export default {
  name: "post",
  props: ["index", "post", "moveUp", "moveDown", "isLastPost"]
};
</script>
