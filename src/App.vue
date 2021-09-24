<template>
  <div id="app">
    <SideNav class="d-none d-md-block" />
    <div class="main-content">
      <header>
        <MainNav />
      </header>
      <main>
        <router-view/>
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
main {
  padding: 0px 15px;
}
.admin {
  color: #323232;
}
@media (min-width: 768px) {
  main {
    padding: 0px 0px;
  }
  .main-content {
    margin-left: 258px;
  }
  .admin {
    padding-left: 33px;
    padding-right: 64px;
  }
}
</style>
