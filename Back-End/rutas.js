const router = require('express').Router()
const conexion = require('./config/conexion')


// Iniciar Sesion
router.get('/login/:rut/:password', (req, res) =>{
    const {rut, password} = req.params;
    let sql = `select * from Usuario where rut='${rut}' and password='${password}'`;
    conexion.query(sql, (error, resultados, fields) => {

        if (error) throw error;
        else{
            res.json(resultados);
        }
    });

});

// Obtener datos academicos alumno
router.get('/alumno/:idAlumno', (req, res) =>{
    const {idAlumno} = req.params;
    let sql = `select a.idAlumno, a.nivel, a.seccion, a.idApoderado
                from Alumno a
                inner join Usuario u
                on a.idAlumno = u.idUsuario
                where a.idAlumno='${idAlumno}'`;
    conexion.query(sql, (error, results, fields) =>{
        if (error) throw error;
        else{
            res.json(results);
        }
    })
})


// Obtener cursos
router.get('/cursos/:id', (req, res)=>{
    const {id} = req.params
    let sql =   `select c.codCurso, c.nombre, c.periodo, c.idDocente
                from Curso c
                inner join Clase cl
                using(codCurso)
                inner join Alumno_Clase ac
                using(idClase)
                inner join Alumno a
                using(idAlumno)
                where a.idAlumno='${id}'
                group by c.codCurso`;
    conexion.query(sql, (error, resultados, fields) => {
        if (error) throw error;
        else{
            res.json(resultados);
        }
    });
})

// Obtener horario curso
router.get('/horario/:codCurso', (req, res) =>{
    const {codCurso} = req.params;
    let sql = `select h.dia, h.horaInicio, h.horaFin
                from Horario h
                inner join Curso c
                using(codCurso)
                where c.codCurso = '${codCurso}'`;
    conexion.query(sql, (error, results, fields) =>{
        if (error) throw error;
        else{
            res.json(results);
        }
    })
})

// Obtener docente y sus datos
router.get('/docente/:idDocente', (req, res) =>{
    const {idDocente} = req.params;
    let sql = `select d.idDocente, u.nombre, u.email
                from Docente d
                inner join Usuario u
                on d.idDocente = u.idUsuario
                where d.idDocente = '${idDocente}'`;
    
    conexion.query(sql, (error, results, fields) => {
        if (error) throw error;
        else{
            res.json(results);
        }
    })
})

//Obtener notas de un curso
router.get('/notas/:idAlumno/:codCurso', (req, res) =>{
    const {idAlumno, codCurso} = req.params;
    let sql = `select a.nota_evaluacion
                from Alumno_Clase a
                inner join Clase c
                on a.idClase = c.idClase
                where a.nota_evaluacion IS NOT NULL and a.idAlumno='${idAlumno}' and c.codCurso='${codCurso}'`;
    conexion.query(sql, (error, results, fields) =>{
        if (error) throw error;
        else{
            res.json(results);
        }
    })
})

// obtener eventos
router.get('/eventos/:idAlumno', (req, res) => {
    const {idAlumno} = req.params;
    let sql = `select ac.tipo_evaluacion, c.fecha
                from Alumno_Clase ac
                inner join Clase c
                on ac.idClase = c.idClase
                where ac.idAlumno='${idAlumno}' and tipo_evaluacion IS NOT NULL`;
    conexion.query(sql, (error, results, fields) =>{
        if (error) throw error;
        else{
            res.json(results);
        }
    })
})

// Obtener usuarios
router.get('/usuarios', (req, res) =>{
    let sql = 'select * from Usuario';
    conexion.query(sql, (error, results, fields) =>{
        if(error) throw error;
        else{
            res.json(results);
        }
    })
})

// Obtener todos los cursos
router.get('/cursos', (req, res) =>{
    let sql = 'select * from Curso';
    conexion.query(sql, (error, results, fields) =>{
        if (error) throw error;
        else{
            res.json(results);
        }
    })
})

module.exports = router