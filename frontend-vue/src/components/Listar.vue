<template>
   <div class="container">
      <div class="card bg-dark">
         <div class="card-header">
            Usuarios
         </div>
         <div class="card-body bg-dark">
            <table class="table-dark" style="width:100%;">
               <thead class="">
                  <tr>
                     <th>ID</th>
                     <th>Nombre</th>
                     <th>Correo</th>
                     <th>Edad</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="item in items" :key="item">
                     <td>{{ item.id }}</td>
                     <td>{{ item.nombre }}</td>
                     <td>{{ item.mail }}</td>
                     <td>{{ item.edad }}</td>

                     <div class="btn-group" role="group" aria-label="">
                        <router-link :to="{name:'Editar',params:{id:item.id}}" class="btn btn-info">Editar</router-link>
                        <button type="button" v-on:click="borrarUsuario(item.id)" class="btn btn-danger">Borrar</button>
                     </div>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
 </template>
<style>
@media (min-width: 1024px) {
.container {
   min-height: 100vh;
}
}
</style>
 <script>
 import axios from 'axios';
 
 export default {
   data() {
     return {
       items: []
     };
   },
   mounted() {
     this.fetchData();
   },
   methods: {
     async fetchData() {
       const response = await axios.get('http://127.0.0.1:3000/api/usuarios');
       this.items = response.data.rows;
     },
     borrarUsuario(id){
      fetch('http://127.0.0.1:3000/api/usuarios/'+id, {
         method: 'DELETE'
      })
            .then((datosRespuesta)=>{
               console.log(datosRespuesta);
               window.location.href='listar'
            })

     }
   }
 };
 </script>
 
