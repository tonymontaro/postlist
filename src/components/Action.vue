<template>
  <li class="action">
    <a href="#" @click="() => replyHistory(action.prevState)">{{
      action.word
    }}</a>
  </li>
</template>

<script>
export default {
  name: "action",
  props: ["action", "replyHistory"]
};
</script>
