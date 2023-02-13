import {createPool} from 'mysql2/promise';

//    IMPORTANTE
//     Cambiar USER y PASSWORD con los propios

//    NOTA: Si se necesita cambiar host con otro IP,
//     se tendra que cambiar tambien en FrontEnd   

export const pool = createPool({
   host: 'localhost',
   user: 'root',
   password: '123456',
   port: '3306',
   database: 'usuariosdb'
});