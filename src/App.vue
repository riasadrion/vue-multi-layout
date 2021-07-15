<template>
  <component :is="layout" />
</template>

<script>
import Auth from "./layouts/Auth";
import Default from "./layouts/Default";

export default {
  components: {
    Auth,
    Default,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      // set layout by route meta
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout;
      } else {
        this.layout = "Default";
      }
    },
  },
};
</script>