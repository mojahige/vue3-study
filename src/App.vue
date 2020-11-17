<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/profile">Profile</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@use "~ress/ress";

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}
</style>
