<template>
  <b-sidebar 
    id="menu-sidebar"
    width="258px" 
    no-close-on-backdrop 
    no-close-on-esc 
    no-close-on-route-change 
    no-header-close 
    visible 
    no-header 
    bg-variant="white"
  >
    <div class="logo-container">
      <img src="@/assets/images/gli-logo.png" alt="GLI Logo" class="sidebar-logo">
    </div>

    <b-nav vertical>
      <b-nav-item v-for="(link, index) in links" :key="index" class="text-left">
        <img :src="require(`@/assets/images/${link.iconSrc}.png`)" :alt="'Icono de ' + link.name">
        {{link.name}}
      </b-nav-item>
    </b-nav>

    <template #footer>
      <div class="help-container mx-auto text-left">
        <p class="m-0">¿Necesitas ayuda?</p>
        <a href="#">Ir a sección de ayuda</a>
        <img src="@/assets/images/external-link.png" alt="Icono de link externo">
      </div>

      <hr>

      <p class="text-center">© Copyright GLI 2021</p>
    </template>
  </b-sidebar>
</template>

<script>
  export default {
    name: 'SideNav',
    data() {
      return {
        links: [
          {
            name: 'Administradores',
            iconSrc: 'admin-icon'
          },
          {
            name: 'Catálogos',
            iconSrc: 'catalogs-icon'
          },
          {
            name: 'Líderes',
            iconSrc: 'leaders-icon'
          },
          {
            name: 'Usuarios',
            iconSrc: 'users-icon'
          },
          {
            name: 'Mi empresa',
            iconSrc: 'company-icon'
          },
          {
            name: 'Cursos',
            iconSrc: 'courses-icon'
          },
          {
            name: 'Recompensas',
            iconSrc: 'rewards-icon'
          },
          {
            name: 'Eventos',
            iconSrc: 'events-icon'
          },
          {
            name: 'Notificaciones',
            iconSrc: 'notifications-icon'
          },
          {
            name: 'Reportes',
            iconSrc: 'reports-icon'
          }
        ]
      }
    },
  }
</script>

<style>
.b-sidebar {
  border-right: 1px solid #E8EAF0;
  font-size: 14px;
}
.sidebar-logo {
  margin: 22px 93px 20px 92px;
}
.nav-item {
  height: 49px;
  border-bottom: 1px solid #E8EAF0;
}
.nav-item:last-child {
  border: none;
}
.nav-link {
  color: #323232 !important;
  height: 100%;
  padding: 12px 0 12px 50px !important;
}
.nav-link:hover {
  background-color: #E8EAF0;
}
.nav-link img {
  margin-right: 10px;
}
.help-container {
  background: #E8EAF0;
  border-radius: 4px;
  height: 56px;
  margin-bottom: 16px;
  position: relative;
  width: 224px;
}
.help-container p {
  padding-left: 16px;
  padding-top: 10px;
}
.help-container a {
  color: #323232;
  font-size: 12px;
  padding-bottom: 10px;
  padding-left: 16px;
  text-decoration: underline;
}
.help-container img {
  position: absolute;
  right: 0;
  top: 0;

  margin-right: 20px;
  margin-top: 20px;
}
.b-sidebar .b-sidebar-footer hr {
  border: 1px solid #E8EAF0;
  width: 224px;
}

.b-sidebar .b-sidebar-footer p {
  font-size: 12px;
}
</style>