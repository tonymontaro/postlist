<template>
  <li :class="boxStyle">
    {{ post.id }}. {{ post.title }}
    <a
      class="chevron-down absolute"
      href="#"
      v-if="!isLastPost"
      @click="() => moveDown(index, post.id)"
      ><Zondicon class="w-5 absolute " icon="CheveronDown"
    /></a>
    <a
      class="chevron-up absolute"
      href="#"
      v-if="index > 0"
      @click="() => moveUp(index, post.id)"
      ><Zondicon class="w-5 absolute " icon="CheveronUp"
    /></a>
  </li>
</template>

<script>
import { BOX_STYLE } from "@/config";
import Zondicon from "vue-zondicons";

export default {
  name: "post",
  components: { Zondicon },
  props: ["index", "post", "moveUp", "moveDown", "isLastPost"],
  data() {
    return { boxStyle: [...BOX_STYLE, "mb-5", "relative", "pr-10"] };
  }
};
</script>

<style>
.chevron-down {
  bottom: 30px;
  right: 30px;
}
.chevron-up {
  top: 10px;
  right: 30px;
}
</style>
