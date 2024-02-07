<template>
  <div class="task-card">
    <h2>{{ task.title }}</h2>
    <p>{{ task.description }}</p>
    <p>Due Date: {{ task.dueDate }}</p>
    <button @click="completeTask">Complete</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const completeTask = () => {
      // Handle task completion logic here
    };

    return {
      completeTask,
    };
  },
};
</script>

<style scoped>
.task-card {
    color: #35495e;
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    background-color: #f4f4f4;
}
</style>
