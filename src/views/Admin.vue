<template>
  <div class="admin">
    <Breadcrumb title="Administradores de la consola"/>

    <div class="table-options d-flex flex-column flex-xl-row justify-content-between">
      <div class="filters d-flex flex-column flex-lg-row">
        <b-input></b-input>
        <div>
          <button class="search-btn mt-2 mt-lg-0"><span class="text-uppercase">Buscar</span></button>
          <button class="filter-btn mt-2 mt-lg-0">
            <img src="@/assets/images/filter-icon.png" alt="">
          </button>
        </div>
        
      </div>
      <div class="other-options mt-3 mt-xl-0">
        <button class="download-btn">Descargar</button>
        <button class="new-btn mt-2 mt-xl-0">Agregar nuevo admin</button>
      </div>
    </div>

    <div class="table-wrapper">
      <b-table
      hover 
      :items="admins" 
      :fields="fields"
      table-class="admins-table"
      responsive
      fill
      class="mb-0">
        <template #cell(check)="data"> 
          <b-checkbox variant="dark" plain>
            {{data.id}}
          </b-checkbox>
        </template>
        <template #cell(name)="data"> 
          <div class="d-flex">
            <b-avatar size="sm" class="mr-2"></b-avatar>
            {{data.item.name}}
          </div>
        </template>
        <template #cell(status)="data"> 
          <span :class="[data.item.status === 'Activo' ? 'active-status' : 'inactive-status', 'status']">{{data.item.status}}</span>
        </template>
        <template #cell(id)="item"> 
          <button title="Editar">
            <img src="@/assets/images/edit-icon.png" alt="Icono de editar">
          </button>
          <button title="Eliminar">
            <img src="@/assets/images/trash-icon.png" alt="Icono de eliminar">
          </button>
          <button title="Ver">
            <router-link :to="{ name: 'AdminProfile', params: { profileId: item.item.id, profile: item.item}}" custom v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" role="link">
                <img src="@/assets/images/eye-icon.png" alt="Icono de ver">
              </span>
            </router-link>
          </button>
        </template>
      </b-table>
      <div class="footer-container d-flex  justify-content-between ml-auto">
        <p>Rows per page : 5</p>
        <p>1-10 of 100</p>
        <p>&lt; &gt;</p>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
  export default {
    name: 'Admin',
    components: {
      Breadcrumb
    },
    data() {
      return {
        admins: [
          {
            id: 0,
            name: 'Gustavo Korsgaard',
            area: 'Recursos Humanos',
            email: 'correo@gmail.com',
            status: 'Activo'
          },
          {
            id: 1,
            name: 'Maria Dias',
            area: 'Recursos Humanos',
            email: 'correo@gmail.com',
            status: 'Activo'
          },
          {
            id: 2,
            name: 'Maren Stanton',
            area: 'Recursos Humanos',
            email: 'correo@gmail.com',
            status: 'Inactivo'
          },
          {
            id: 3,
            name: 'Paityn Ekstrom',
            area: 'Recursos Humanos',
            email: 'correo@gmail.com',
            status: 'Activo'
          },
          {
            id: 4,
            name: 'Kierra Bergson',
            area: 'Recursos Humanos',
            email: 'correo@gmail.com',
            status: 'Activo'
          },
          {
            id: 5,
            name: 'Talan Rosser',
            area: 'Recursos Humanos',
            email: 'correo@gmail.com',
            status: 'Activo'
          }
        ],
        fields: [
          {
            key: 'check',
            thStyle: { 'width': '60px'},
            tdClass: 'custom-td'
          },
          {
            key: 'name',
            label: 'Administradores',
            thStyle: { 'width': '303px'},
            tdClass: 'custom-td',
            sortable: true
          },
          {
            key: 'area',
            label: 'Área',
            thStyle: { 'width': '165px'},
            tdClass: 'custom-td'
          },
          {
            key: 'email',
            label: 'Correo',
            thStyle: { 'width': '263px'},
            tdClass: 'custom-td'
          },
          {
            key: 'status',
            label: 'Estatus',
            thStyle: { 'width': '178px'},
            tdClass: 'custom-td'
          },
          {
            key: 'id',
            label: 'Opciones',
            thStyle: { 'width': '118px'},
            tdClass: 'options-btn'
          }
        ]
      }
    }
  }
</script>

<style>

.table-options {
  margin-bottom: 16px;
}
.table-options button {
  border: none;
  border-radius: 4px;
  font-size: 13px;
  height: 42px;
}
.filters input {
  background-color: #E8EAF0;
  border-radius: 32px;
  opacity: 0.24;
}
.filters .search-btn {
  background: #E8EAF0;
  margin-right: 24px;
  width: 82px;
}
.filters .filter-btn {
  background: #4FB9BB;
  width: 42px;
}
.other-options .download-btn{
  background-color: #FFFFFF;
  border: 1px solid #4FB9BB;
  margin-right: 24px;
  width: 94px;
}
.other-options .new-btn{
  background-color: #4FB9BB;
  box-sizing: border-box;
  color: #FFFFFF;
  width: 163px;
}
table .custom-td {
  font-size: 14px !important;
}
.table .status {
  font-size: 12px;
  font-weight: bold;
  padding: 4px;
}
.table .active-status {
  background: #E8F5E9;
  color: #4CAF50;
}
.table .inactive-status {
  background: #FFE1E0;
  color: #EB5757;
}
.table .options-btn button{
  background-color: transparent;
  border: 0;
}
.footer-container {
  font-size: 12px;
  margin-top: 16px;
  max-width: 350px;
}
.footer-container p {
  font-weight: 400;
  margin: 0;
}

@media (min-width: 768px) {  
  .filters input {
    width: 309px;
  }
  .filters .filter-btn {
    margin-left: 16px;
  }
}

@media (min-width: 992px) {  
  .filters .search-btn {
    margin-left: 12px;
  }
}
</style>