<template>
  <div class="breadcrumb d-flex flex-column">
    <p>Inicio <span>> Administradores</span></p>
    <h1 class="m-0">{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    props: {
      title: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped>
.breadcrumb {
  background-color: #FFFFFF !important;
  margin: 24px 0;
  padding: 0 !important;
}
.breadcrumb p {
  font-size: 16px;
  font-weight: normal;
  margin: 0;
}
.breadcrumb span {
  color: #4FB9BB;
}
.breadcrumb h1 {
  font-size: 20px;
  font-weight: 600;
}
</style>