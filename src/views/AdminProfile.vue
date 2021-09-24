<template>
  <div class="admin admin-profile">
    <Breadcrumb title="Perfil de administrador"/>

    <div class="profile-card">
      <b-avatar src="@/assets/images/user-logo.png"></b-avatar>
      <h2 class="admin-name">{{profile.name}}</h2>
      <b-container fluid class="text-left">
        <b-row>
          <b-col class="pl-md-0" cols="12" sm="6" md="3">
            <p class="field">Nombre (s)</p>
            <p class="profile-info">{{profile.name}}</p>
          </b-col>
          <b-col cols="12" sm="6" md="3">
            <p class="field">Apellidos</p>
            <p class="profile-info">{{profile.name}}</p>
          </b-col>
          <b-col class="mt-sm-2 mt-md-0" cols="12" sm="6" md="3">
            <p class="field">Correo electrónico</p>
            <p class="profile-info">{{profile.email}}</p>
          </b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col class="pl-md-0" cols="12" sm="6" md="3">
            <p class="field">Área</p>
            <p class="profile-info">{{profile.area}}</p>
          </b-col>
          <b-col cols="12" sm="6" md="3">
            <p class="field">Estatus</p>
            <p class="profile-info">{{profile.status}}</p>
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
      <hr>
      <button>
        <router-link :to="{ name: 'EditAdmin', params: { profileId: profile.id, profile: profile}}" custom v-slot="{ navigate }">
          <span @click="navigate" @keypress.enter="navigate" role="link">
            Editar administrador
          </span>
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
  export default {
    name: 'AdminProfile',
    components: {
      Breadcrumb
    },
    data() {
      return {
        profile: {}
      }
    },
    created(){
      this.profile = this.$route.params.profile
    }
  }
</script>

<style scoped>
.profile-card h2 {
  font-size: 18px;
  font-weight: 600;
  margin-top: 4px;
}
.profile-card .container-fluid {
  margin-top: 24px;
}
.profile-card .container-fluid .row:first-child{
  margin-bottom: 16px;
}
.profile-card .container-fluid .field{
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  opacity: 0.64;
  text-transform: uppercase;
}
.profile-card .container-fluid .profile-info{
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}
.profile-card hr{
  margin: 32px auto 16px 0;
  width: 100%;
}
.profile-card button {
  background-color: #4FB9BB;
  border: 0;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 13px;
  height: 42px;
  width: 158px;
}
</style>