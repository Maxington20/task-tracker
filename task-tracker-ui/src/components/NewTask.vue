<template>
    <div v-if="isVisible" class="modal-overlay">
        <!-- Modal content-->
        
        <div class="modal-content">
            <!--create a form to edit/create a task-->
            <button @click="closeModal" class="close-button">X</button>
            <form>
                <div class="form-group">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="task.name">
                </div>
                <div class="form-group">
                    <label for="status" class="form-label">Status</label>
                    <input class="form-control" id="status" v-model="task.status">
                </div>
                <button type="submit" class="btn btn-primary" @click="saveTask">Save</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

import { reactive } from 'vue';
import type { Task } from '../models/Task';

// Define props directly with default values for TypeScript
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  task: {
    type: Object as () => Task | null,
    default: () => ({ name: '', status: '' })
  }
});

const emit = defineEmits(['update:isVisible']);

// Use reactive to ensure task is deeply reactive
const task = reactive(props.task);

const closeModal = () => {
  emit('update:isVisible', false);
};

function saveTask() {
  // Handle task saving logic here
  console.log('Task saved:', task.name, task.status);
  emit('update:isVisible', false);
  task.name = '';
  task.status = '';
}

</script>

<style scoped>
 .modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
}

.modal-content {
  width: 50%; /* Half the width of the screen */
  height: 50%; /* Half the height of the screen */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: relative; /* For positioning the close button */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  color: #35495e;
}

.close-button:hover {
  color: #ff0000;
}

.form-group {
  width: 80%; /* Less than the modal width for centered inputs */
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group label {
  display: block;
  margin-bottom: .5rem;
  color: #35495e;
  text-align: center;
}

.form-control {
  width: 100%; /* Full width of the form-group container */
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.form-control:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
}

.btn-primary {/* Match width of form inputs */
  color: #fff;
  background-color: #35495e;
  border-color: #35495e;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

/* Ensures form is properly aligned and centered */
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>