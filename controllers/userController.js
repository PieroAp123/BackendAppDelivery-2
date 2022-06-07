 const { getAll } = require('../models/user')
const User = require('../models/user')

 module.exports = {

     async getAll(res, req, next) {
         try {
             const data = await User.getAll();
             console.log(`Usuarios: ${data}`);
             return res.status(200).json(data); 
         } catch (e) {
             console.log(`Error: ${e}`);
             return res.status(500).json({
                 success: false,
                 message: 'Error al obtener los usuarios' 
             });
         }
     }

 }