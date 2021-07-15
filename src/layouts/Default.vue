<template>
  <div>
    <h1>Hello, I'm dashboard layout</h1>
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
export default {
  components: {
    Nav,
    Sidebar,
    Footer,
  },
};
</script>

<style>
</style>