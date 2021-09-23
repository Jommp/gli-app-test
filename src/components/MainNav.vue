<template>
  <b-navbar>
    <b-navbar-nav class="d-md-none">
      <button class="menu-btn">
        <b-icon icon="list"></b-icon>
      </button>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto align-items-center">
      <img src="@/assets/images/search-icon.png" alt="Icono de buscar" class="icon">
      <div class="user-information d-flex align-items-center">
        <img src="@/assets/images/user-logo.png" alt="Imagen de perfil de usuario">
        <div>
          <p>Adrian Stefan</p>
          <p>Recursos Humanos</p>
        </div>
      </div>
      <img src="@/assets/images/log-out-icon.png" alt="Icono de cerrar sesión" class="icon">
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  export default {
    name: 'MainNav'
  }
</script>

<style scoped>
nav  {
  background-color: #4FB9BB;
  height: 80px;
}
.navbar-nav button {
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  background-color: #4ea0a3 !important;
}
.icon {
  height: 16.67px;
  width: 16.67px;
}
.icon:hover {
  cursor: pointer;
}
.icon:first-child {
  margin-right: 18px;
}
.icon:last-child {
  margin-left: 14px;
  margin-right: 32px;
}
.user-information {
  border-left: 1px solid rgba(255, 255, 255, .32);
  height: 48px;
  padding-left: 20px;
}
.user-information img {
  border-radius: 50%;
  height: 40px;
  margin-right: 8px;
  width: 40px;
}
.user-information div p {
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  margin: 0
}

@media (min-width: 768px) {  
  .icon:first-child {
    margin-right: 36px;
  }
  .icon:last-child {
    margin-left: 28px;
    margin-right: 64px;
  }
  .user-information {
    padding-left: 40px;
  }
}
</style>