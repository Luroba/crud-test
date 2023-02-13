import { pool } from "../db.js";

// Controlador con los metodos necesarios que se direccionan con usuarios.routes.js

export const getUsuarios = async(req, res) => {
   try {
      const [rows] = await  pool.query('SELECT * FROM usuarios')
      res.json({rows})
   } catch (error) {
      return res.status(500).json({
         message: 'Something went wrong'
      })
   }
}

export const getUsuario = async(req, res) => {
   try {
      console.log(req.params.id)
      const [row] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id])
      if (row.length <= 0) return res.status(404).json({
         message: 'Usuario no encontrado'
      })
      res.json(row[0])
      
   } catch (error) {
      message: 'Something went wrong'
   }
}

export const createUsuarios = async (req, res) => {
   try {
      const { nombre, 
         mail, 
         edad
      } = req.body;
      const [rows] = await pool.query('INSERT INTO usuarios ( nombre, mail, edad) VALUES (?, ?, ?)',
      [nombre, mail, edad])
      console.log(req.body);
      res.send({
         id: rows.insertId,
         nombre,
         mail,
         edad
      })
      
   } catch (error) {
      message: 'Something went wrong'
   }
};


export const deleteUsuarios = async (req, res) => {
   try {
      const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [req.params.id])
   
      if (result.affectedRows <= 0) return res.status(404).json({
         message: 'Usuario no encontrado'
      })
   
      res.sendStatus(204)
   } catch (error) {
      message: 'Something went wrong'
   }
}


export const updateUsuarios = async (req, res) => {
   try {
      const {id} = req.params
      const { nombre, 
         mail, 
         edad 
      } = req.body
   
      const [result] = await pool.query('UPDATE usuarios SET nombre = IFNULL(?, nombre), mail = IFNULL(?, mail), edad = IFNULL(?, edad) WHERE id = ?',
      [nombre, mail, edad])
   
      if (result.affectedRows === 0) return res.status(404).json({
         message: 'Usuario no encontrado'
      })
   
      const [row] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id])
   
      res.json(row[0])
   } catch (error) {
      message: 'Something went wrong'
   }
}