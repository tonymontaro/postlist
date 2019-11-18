<template>
  <li :class="boxStype">
    {{ historyItem.word }}
    <button
      :class="btnStyle"
      @click="() => replyHistory(historyItem.prevState)"
    >
      Time travel
    </button>
  </li>
</template>

<script>
import { BOX_STYLE } from "@/config";

export default {
  name: "historyItem",
  props: ["historyItem", "replyHistory"],
  data() {
    return {
      boxStype: [...BOX_STYLE],
      btnStyle: [
        "bg-green-200",
        "hover:bg-green-300",
        "py-1",
        "px-2",
        "rounded",
        "ml-3"
      ]
    };
  }
};
</script>
