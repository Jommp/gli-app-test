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
      borderless
      thead-class=""
      table-class="admins-table"
      responsive
      fill>
        <template #cell(check)="data"> 
          <b-checkbox button-variant="dark" plain>
            {{data.id}}
          </b-checkbox>
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
        <template #foot>
          Rows per page: 5
        </template>
      </b-table>
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
            thStyle: { 'width': '60px'}
          },
          {
            key: 'name',
            label: 'Administradores',
            thStyle: { 'width': '303px'},
            sortable: true
          },
          {
            key: 'area',
            label: 'Área',
            thStyle: { 'width': '165px'}
          },
          {
            key: 'email',
            label: 'Correo',
            thStyle: { 'width': '263px'}
          },
          {
            key: 'status',
            label: 'Estatus',
            thStyle: { 'width': '178px'}
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

<style scoped>

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
.admins-table .table td {
  padding: 16px !important;
}
.table .options-btn button{
  background-color: transparent;
  border: 0;
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