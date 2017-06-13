<style scoped>
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity 0.1s ease;
  }

  .component-fade-enter,
  .component-fade-leave-to {
    opacity: 0;
  }
</style>

<template>
  <div class="main">
    <transition name="component-fade" mode="out-in">
      <component :is="$route.component"/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    el: '#app',
    data: {
      config: {}
    },

    created() {
      this.$http.get('config.json')
      .then(response => {
        this.config = response;
      })
      .catch(e => console.error(e));
    }
  };
</script>
