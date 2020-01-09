<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    this.$client.joinOrCreate("my_room", {/* options */}).then(room => {
      // eslint-disable-next-line no-console
      console.log("joined successfully", room);
    }).catch(e => {
      // eslint-disable-next-line no-console
      console.error("join error", e);
    });
  }
}
</script>
