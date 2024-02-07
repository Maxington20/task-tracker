<template>
    <div class="task-board">
      <div class="task-board-column">
        <div class="task-board-header">
          <h2>Not Started</h2>
        </div>
        <div class="task-list">
          <Task v-for="task in notStartedTasks" :key="task.title" :task="task"/>
        </div>
      </div>
      <div class="task-board-column">
        <div class="task-board-header">
          <h2>In Progress</h2>
        </div>
        <div class="task-list">
          <Task v-for="task in inProgressTasks" :key="task.title" :task="task"/>
        </div>
      </div>
      <div class="task-board-column">
        <div class="task-board-header">
          <h2>Completed</h2>
        </div>
        <div class="task-list">
          <Task v-for="task in completedTasks" :key="task.title" :task="task"/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { Task as TaskModel } from '../models/Task.ts';
  import Task from '../components/Task.vue';
  
  const tasks = ref<TaskModel[]>([
    {
      title: 'Task 1',
      description: 'This is the first task',
      dueDate: '2022-12-31',
      status: 'notStarted'
    },
    {
      title: 'Task 2',
      description: 'This is the second task',
      dueDate: '2022-12-31',
      status: 'inProgress'
    },
    {
      title: 'Task 3',
      description: 'This is the third task',
      dueDate: '2022-12-31',
      status: 'completed'
    },
    {
        title: 'Task 4',
        description: 'This is the fourth task',
        dueDate: '2022-12-31',
        status: 'notStarted'
    },
    {
        title: 'Task 5',
        description: 'This is the fifth task',
        dueDate: '2022-12-31',
        status: 'inProgress'
    },
    {
        title: 'Task 6',
        description: 'This is the sixth task',
        dueDate: '2022-12-31',
        status: 'inProgress'
    }
  ]);
  
  const notStartedTasks = computed(() => tasks.value.filter(task => task.status === 'notStarted'));
  const inProgressTasks = computed(() => tasks.value.filter(task => task.status === 'inProgress'));
  const completedTasks = computed(() => tasks.value.filter(task => task.status === 'completed'));
  
  </script>
  
  <style scoped>
  .task-board {
    display: flex;
    justify-content: space-between;
  }
  
  .task-board-column {
    flex: 1;
    margin: 0 1rem;
  }
  
  .task-board-header {
    color: #35495e;
    text-align: center;
  }
  
  .task-list {
    min-height: 100px; /* Set a min height for better visual */
    border: 1px solid #ccc; /* Add a border for better visual */
    padding: 1rem;
  }
  
  .task-list .task-item {
    cursor: pointer;
  }
  
  .task-list .task-item:hover {
    background-color: #f0f0f0; /* Change background color on hover for better visual */
  }
  
  .task-list .task-item.dragging {
    opacity: 0.75; /* Reduce opacity of dragging item for visual feedback */
  }
  </style>
  