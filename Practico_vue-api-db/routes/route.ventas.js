const express = require('express');
const router = express.Router(); // para acceder a las rutas, la guardo dentro de la constante

const db = require('d:/ITS 3ro/Seg Cuatrimestre/Pract.Prof III/Practicos/Practico_vue-api-db/src/database'); //Aca va el DataBase

router.get('/factura', (req,res) => { //Consulta datos de la BBDD
    //res.json('Haciendo la consulta a la BBDD');
    db.query('select * from factura',(err,rows) => { //selecciona la Tabla
        if(!err){ 
            res.json(rows);
        }else{
            res.json('Error al traer los datos de la tabla factura');
        }
    });
});

router.delete('/factura/:idufact', (req,res)=> { //Elimina datos de la BBDD - /:idufact = se añade a la ruta para que reciba el id del factura a eliminar
    var idu = req.params.idufact; //pasa el dato anterior a la variable
    db.query('delete from factura where id_factura = ?', [idu]);
    res.json('Se ha eliminado el factura seleccionado');
});

router.post('/factura', (req,res) => { // Carga datos a la BBDD
    const unaVta = req.body;
    db.query('insert into factura set ?',[unaVta]); //? = para poder insertar datos de la constante
    res.json('Se cargo correctamente el dato a la BBDD');
});

router.put('/factura/:codigo', (req,res) => { // Actualiza datos a la BBDD
    const idvta = req.params.codigo;
    const unaVta = req.body;

    db.query('update factura set ? where id_factura = ?',[unaVta,idvta]);
    res.json('Se Actualizaron los datos de la BBDD');
});


router.get('/factura/:filtro', (req,res) => { // Ruta para realizar filtrado/busqueda dato escrito completamente
    const fill = req.params.filtro;
    db.query('select * from factura where id_factura = ?',[fill],(err,rows) =>{ //en este caso busca por el campo apellido
        if(!err){
            res.json(rows);// Con  [0] no es necesario colocar un for 
        }else{
            res.json('Error al traer el dato de la BBDD, puede no encontrarse o bien hay un error')
        }
    });
    /*const BusqMedia = req.params.filtro;
    db.query("select * from factura where Apellido like 'BusqMedia%'" ,(err,rows) =>{ //en este caso busca por el campo apellido
        if(!err){
            res.json(rows);// Con  [0] no es necesario colocar un for 
        }else{
            res.json('Error al traer el dato de la BBDD, puede no encontrarse o bien hay un error')
        }
    });*/
});
module.exports = router;