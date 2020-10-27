<template>
  <router-view />
</template>

<style>
@font-face {
  font-family: 'Raybees';
  src: url('/rb.woff');
}

* {
  font-family: 'Raybees', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #62361b;
}

button {
  color: #f9461c;
  background-color: transparent;
  border: 7px inset #522398;
}

button b {
  color: #522398;
}

h1 {
  color: #f9e300;
}

a {
  color: #522398;
}
</style>
