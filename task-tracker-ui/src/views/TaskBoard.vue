<template>
  <div class="task-board-header">
        <h2>Not Started</h2>
        <h2>In Progress</h2>
        <h2>Completed</h2>
    </div>
    <div class="task-board">    
        <Task v-for="task in tasks" :key="task.title" :task="task" />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Task from '../components/Task.vue';
    import { Task as TaskModel } from '../models/Task.ts';

    const tasks = ref<TaskModel[]>([
      {
        title: 'Task 1',
        description: 'This is the first task',
        dueDate: '2022-12-31',
      },
      {
        title: 'Task 2',
        description: 'This is the second task',
        dueDate: '2022-12-31',
      },
      {
        title: 'Task 3',
        description: 'This is the third task',
        dueDate: '2022-12-31',
      },
    ]);

</script>

<style scoped>

.task-board-header {
    color: #35495e;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 1rem;
}

.task-board {
    color: #35495e;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
}
</style>
