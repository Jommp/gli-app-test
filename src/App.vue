<template>
  <div id="app">
    <SideNav class="d-none d-md-block" />
    <div class="main-content">
      <header>
        <MainNav />
      </header>
      <main>
        <router-view/>
        <h1>Hola</h1>
      </main>
    </div>
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue'
import MainNav from './components/MainNav.vue'
export default {
  name: 'App',
  components: {
    SideNav,
    MainNav
  }
}
</script>

<style>
@media (min-width: 768px) {  
  .main-content {
    margin-left: 258px;
  }
}
</style>
