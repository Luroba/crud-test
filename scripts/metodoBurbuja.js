
function burbuja(arr){
   for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
         if (arr[j] > arr[j+1]) {
            let aux = arr[j]
            arr[j] = arr[j+1]
            arr[j+1]= aux
         }         
      }
   }
   return arr;
}

console.log(
   burbuja([6,5,45,13,21,1]) // array cualquiera desordenado
);