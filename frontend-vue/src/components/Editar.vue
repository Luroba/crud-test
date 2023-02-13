<template>
   <div class="container">
      
      <div class="card bg-dark">
         <div class="card-header">
            Editar Usuario
         </div>
         <div class="card-body">

            <form v-on:submit.prevent="actualizarRegistro" class="bg-dark">
               <div class="form-group bg-dark">
                  <label for="nombre">Nombre: </label>
                  <input type="text"
                     class="form-control" name="nombre" v-model="usuario.nombre" id="nombre" required>
               </div>
               <div class="form-group">
                  <label for="mail">Mail: </label>
                  <input type="text"
                     class="form-control" name="mail" v-model="usuario.mail" id="mail" required>
               </div>
               <div class="form-group">
                  <label for="edad">Edad: </label>
                  <input type="number"
                     class="form-control" name="edad" v-model="usuario.edad" id="edad" required>
               </div>

               <div class="btn-group" role="group" aria-label="">
                  <button type="submit" class="btn btn-primary">Modificar</button>
                  <router-link :to="{name:'Listar'}" class="btn btn-warning">Cancelar</router-link>
               </div>
            </form>
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
   export default {
      
      data(){
         return{
            usuario: {}
         }
      },
      created:function(){

      },
      methods:{
         obtenerInformacionID(){
            fetch('http://127.0.0.1:3000/api/usuarios/'+this.$route.params.id, {
               method:"PATCH",
               headers: {
                  "Content-Type": "application/json"
               }, 
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
               console.log(datosRespuesta)
               // this.usuario=datosRespuesta[0];
            })
         }
      }

   }
</script>