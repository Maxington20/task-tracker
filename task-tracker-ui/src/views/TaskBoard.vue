<template>
  <div>
    <button @click="showModal" class="add-task-button">Add Task</button>  
    <div class="task-board">
      <NewTask :isVisible="isModalVisible" :task="newTask" @update:isVisible="updateVisibility" />
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
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import Task from '../components/Task.vue';
  import {mockTasks} from '../mockData/mockTasks.ts';
  import NewTask from '../components/NewTask.vue';
  
  const tasks = ref<Task[]>(mockTasks);
  const notStartedTasks = computed(() => tasks.value.filter(task => task.status === 'notStarted'));
  const inProgressTasks = computed(() => tasks.value.filter(task => task.status === 'inProgress'));
  const completedTasks = computed(() => tasks.value.filter(task => task.status === 'completed'));
  
  const isModalVisible = ref(false);
  const newTask = ref<Task>({
    id: 1,
    name: '',
    status: 'notStarted'
  })

  const showModal = () => {
    isModalVisible.value = true;
  }

  const updateVisibility = (value: boolean) => {
    isModalVisible.value = value;
  }

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
    width: 75%;
    margin-right: auto;
    margin-left: auto;
  }
  
  .task-list .task-item {
    cursor: pointer; /* Change cursor to pointer for better visual */
  }
  
  .task-list .task-item:hover {
    background-color: #f0f0f0; /* Change background color on hover for better visual */
  }
  
  .task-list .task-item.dragging {
    opacity: 0.75; /* Reduce opacity of dragging item for visual feedback */
  }
  </style>
  