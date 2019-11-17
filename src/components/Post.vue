<template>
  <li class="post">{{ post.id }}. {{ post.title }}</li>
</template>

<script>
export default {
  name: "post",
  props: ["post"]
};
</script>
