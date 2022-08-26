<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
     <h1 class="text-1xl font-bold underline">
      Hello world!
    </h1>
    <notifications class="mt-24">
      <template #body="props">
        <div class="my-notification">
          <p class="title">
            {{ props.item.title }}
          </p>
          <button class="close" @click="close">
            <i class="fa fa-fw fa-close"></i>
          </button>
          <div v-html="props.item.text"/>
        </div>
      </template>
    </notifications>
    

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
        title: "NUEVO EVENTO DISPONIBLE",
        text: argumentos +"</br> hola",
        position: [0, 0],
        duration: 1000000
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

.vue-notification{
  background: black;
  font-size:18px
}

.my-notification{
  background:black;
  color:white;
}


</style>
