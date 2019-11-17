<template>
  <section id="actions">
    <h1>List of actions committed</h1>
    <ul>
      <template v-for="(action, idx) in history">
        <Action :action="action" :key="idx" />
      </template>
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
</style>
