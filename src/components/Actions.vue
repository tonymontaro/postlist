<template>
  <section id="actions">
    <h1 :class="headerStyle">List of actions committed</h1>
    <ul :class="ulStyle">
      <transition-group name="slide" class="w-full">
        <template v-for="action in history">
          <Action
            :action="action"
            :key="action.id"
            :replyHistory="replyHistory"
          />
        </template>
      </transition-group>
    </ul>
  </section>
</template>
<script>
import Action from "./Action";
import { BOX_STYLE } from "@/config";

export default {
  name: "actions",
  components: { Action },
  data() {
    return {
      headerStyle: [...BOX_STYLE, "text-xl"],
      ulStyle: [...BOX_STYLE, "p-5", "bg-gray-200"]
    };
  },
  computed: {
    history() {
      return this.$store.state.history.history;
    }
  },
  methods: {
    replyHistory(posts) {
      this.$store.commit("posts/replyHistory", posts);
    }
  }
};
</script>

<style scoped>
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

@keyframes slide-in {
  from {
    transform: translateX(-20px);
  }
  to {
    transform: translateX(0);
  }
}

li {
  margin-bottom: 1px;
}
</style>
