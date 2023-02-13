<template>
   <div class="container">
      
      <div class="card bg-dark">
         <div class="card-header">
            Agregar Usuario
         </div>
         <div class="card-body">

            <form v-on:submit.prevent="agregarRegistro" class="bg-dark">
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
                  <button type="submit" class="btn btn-primary">Agregar</button>
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
      methods:{
         agregarRegistro(){

            console.log(this.usuario)

            var datosEnviar={nombre:this.usuario.nombre,
                              mail:this.usuario.mail,
                              edad:this.usuario.edad
                           }
            fetch('http://127.0.0.1:3000/api/usuarios',{
               method:"POST",
               headers: {
                  "Content-Type": "application/json"
               }, 
               body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
               console.log(datosRespuesta);
               window.location.href='listar'
            })
         }
      }

   }
</script>