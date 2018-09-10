const express = require('express')
const app = express()
const mysql = require("mysql")

app.get('/user/:id', (req, res) => {
    console.log("Fetching student with id: "+ req.param('id'))

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root123',
        database: 'empleadobd',
        port: '3306'
    })

    const userId = req.param('id')
    const queryString = "SELECT * FROM tbl_empleado"
    const queryRead = "SELECT * FROM tbl_empleado WHERE id =" + userId
    connection.query(queryRead, (err, rows, fields) => {
        if (err){
            console.log("Failed to retrieve " + err)
            res.sendStatus(500)
            res.end()
            return 
            
        }
        console.log("data fetched... !!!")

        //custom formatting
       /* const empleado = rows.map((row) => {
            return {Nombre: row.nombre, 
                    Apellido: row.apellido, 
                    Correo_Electronico: row.email, 
                    Fecha_Ingreso: row.createdAt }
        }) */

        res.json(rows)
        //res.json(empleado)
    })

})


// localhost:3003
app.listen(3003, () => {
    console.log("Server listening on port 3003...")
})
