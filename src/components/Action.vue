<template>
  <li class="action">
    <a href="#">{{
      `Moved post ${action.postId} from index ${action.idx +
        1} to index ${action.endIdx + 1}`
    }}</a>
  </li>
</template>

<script>
export default {
  name: "action",
  props: ["action"]
};
</script>
