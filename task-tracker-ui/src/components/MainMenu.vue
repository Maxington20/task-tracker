<template>
    <header class="header">
      <h1 class="logo">Task Tracker</h1>
      <nav class="navbar">
        <router-link to="/" exact-active-class="active-link">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .header {
    background-color: #35495e; /* Dark blue background color */
    color: #fff; /* White text color */
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 24px;
  }
  
  .navbar a {
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
  }
  
  .navbar a:hover {
    color: #ffa500; /* Orange hover color */
  }

  .active-link{
    color: #ff4500; /* Red active color */
  }
  </style>
  