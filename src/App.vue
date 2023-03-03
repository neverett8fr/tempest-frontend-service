<template>
  <div>
    <notifications></notifications>
    <LoginForm v-if="store.token == ''"></LoginForm>
    <router-view v-else :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

import LoginForm from './pages/Login/LoginForm.vue';
import { store } from './store/store';

export default {
  data() {
    return {
      store: store,
    };
  },
  methods: {
    toggleNavOpen() {
      let root = document.getElementsByTagName("html")[0];
      root.classList.toggle("nav-open");
    }
  },
  mounted() {
    this.$watch("$sidebar.showSidebar", this.toggleNavOpen);
  },
  components: { LoginForm }
};
</script>

<style lang="scss"></style>
