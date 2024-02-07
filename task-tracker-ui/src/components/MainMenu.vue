<template>
    <header class="header">
      <h1 class="logo">Task Tracker</h1>
      <nav class="navbar">
        <router-link to="/" exact-active-class="active-link">Home</router-link>
        <router-link to="/tasks" exact-active-class="active-link">Tasks</router-link>
        <router-link to="/about" exact-active-class="active-link">About</router-link>        
      </nav>
    </header>
  </template>
  
  <style scoped>
  .header {
    background-color: #35495e; /* Dark blue background color */
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 24px;
  }
  
  .navbar a {
    color: #fff; /* White link color */
    text-decoration: none;
    margin-right: 1rem;
  }
  
  .navbar a:hover {
    color: #ffa500; /* Orange hover color */
  }

  .navbar a.active-link{
    color: #ffa500; /* Red active color */
  }
  </style>
  