<template>
  <div>
    <div class="home">
      <h1>Welcome to the Task Tracker</h1>
      <p>Create, Update, and Track Your Tasks</p>
    </div>
    <div class="task-board-column">
      <div class="task-board-header">
        <h2>Due Soon</h2>
      </div>      
      <div class="task-list">
        <Task v-for="task in uncompletedTasks" :key="task.title" :task="task"/>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import { ref, computed } from 'vue';
  import Task from '../components/Task.vue';
  import {mockTasks} from '../mockData/mockTasks.ts';

  const uncompletedTasks = computed(() => mockTasks.filter(task => task.status !== 'completed'));

</script>
  
<style scoped>
  .home {
    text-align: center;
    margin-top: 3em;
    margin-left: 1em;
    color: #35495e; /* Dark blue text color */
    float: left;
    width: 30%;
  }

  .home h1 {
    font-size: 2em;
  }

  .home p {
    font-size: 1.2em;
  }

  .task-board-column {
    flex: 1;
    margin: 0 1rem;
    float: right;
    width: 50%;
  }
  
  .task-board-header {
    color: #35495e;
    text-align: center;
  }

  .task-list {
    min-height: 100px; /* Set a min height for better visual */
    border: 1px solid #ccc; /* Add a border for better visual */
    padding: 1rem;
    width: 75%;
    margin-right: auto;
    margin-left: auto;
  }
</style>
  