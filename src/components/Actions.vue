<template>
  <section id="actions">
    <h1>List of actions committed</h1>
    <ul>
      <transition-group name="slide">
        <template v-for="action in history">
          <Action :action="action" :key="action.id" />
        </template>
      </transition-group>
    </ul>
  </section>
</template>
<script>
import Action from "./Action";

export default {
  name: "actions",
  components: { Action },
  data() {
    return {};
  },
  computed: {
    history() {
      return this.$store.state.history.history;
    }
  },
  methods: {}
};
</script>

<style scoped>
li {
  display: block;
  padding: 20px;
  border: 1px solid gray;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
}

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
</style>
