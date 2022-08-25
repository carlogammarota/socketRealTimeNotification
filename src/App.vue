<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <notifications />
    <h2>Usuarios Conectados</h2>
    <h5 style="font-size:150px; margin-top:50px">{{ usuarioConectados }}</h5>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
  
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue'
import socket from "./socket.js";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      usuarioConectados: 0
    }
  },
  mounted() {
    socket.on("UsuariosConectados", (argumentos) => {
      this.usuarioConectados = argumentos;
      console.log('Usuarios Conectados', argumentos)
      // this.$notify("Hello user!");
    });
    socket.on("Notification", (argumentos) => {
      console.log('Nueva Notificacion', argumentos)
      this.$notify({
        title: "Mensaje",
        text: argumentos,
        position: [0, 0]
      });
    });
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.notification-content{
  font-size:30px !important;
  
}

</style>
