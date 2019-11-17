<template>
  <li class="post">
    {{ post.id }}. {{ post.title }}
    <br />
    <button v-if="index > 0" @click="() => moveUp(index, post.id)">up</button>
    <button v-if="!isLastPost" @click="() => moveDown(index, post.id)">
      down
    </button>
  </li>
</template>

<script>
export default {
  name: "post",
  props: ["index", "post", "moveUp", "moveDown", "isLastPost"]
};
</script>
