<template>
  <li class="action">
    {{
      `Moved post ${postId} from index ${action.idx +
        1} to index ${action.endIdx + 1}`
    }}
  </li>
</template>

<script>
export default {
  name: "action",
  props: ["action"],
  data() {
    return {
      postId: this.action.postId
    };
  }
};
</script>
