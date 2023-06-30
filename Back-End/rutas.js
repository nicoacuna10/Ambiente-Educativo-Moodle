const router = require('express').Router()
const conexion = require('./config/conexion')
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()


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

// Obtener usuario
router.get('/usuario/:idUsuario', (req, res) =>{
    const {idUsuario} = req.params;
    let sql = `select * from Usuario where idUsuario='${idUsuario}'`;
    conexion.query(sql, (error, results, fields) =>{
        if (error) throw error;
        else{
            res.json(results);
        }
    })
})

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
    let sql = `select ac.tipo_evaluacion, c.fecha, cu.nombre
                from Alumno_Clase ac
                inner join Clase c
                on ac.idClase = c.idClase
                inner join Curso cu
                on c.codCurso=cu.codCurso
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

// Crear cuenta alumno
router.post('/crear-cuenta-alumno', jsonParser, (req, res) =>{
    const nombre = req.body.nombre;
    const rut = req.body.rut;
    const password = req.body.password;
    const email = req.body.email;
    const direccion = req.body.direccion;
    const nivel = req.body.nivel;
    const seccion = req.body.seccion;
    const idApoderado = req.body.idApoderado;
    const idTipo = 1;
    let sql1 = `SELECT CAST(idUsuario as int) as idUsuario_int FROM Usuario ORDER BY idUsuario_int desc LIMIT 1;`;
    conexion.query(sql1, (error, results, fields) =>{
        if (error) throw error;
        else{
            if(results.length==1){
                //console.log(results[0].idUsuario_int)

                const idUsuario = String(results[0].idUsuario_int+1).padStart(10, 0);

                let sql2 = `insert into Usuario values('${idUsuario}', '${nombre}', '${rut}', '${password}', '${email}', '${direccion}', '${idTipo}')`;
                conexion.query(sql2, (error, results, fields) =>{
                    if(error) throw error;
                    else{
                        let sql3 = `insert into Alumno values('${idUsuario}', '${nivel}', '${seccion}', '${idApoderado}')`;
                        conexion.query(sql3, (error, results, fields) =>{
                            res.json({"mensaje": true})
                        })
                    }
                })
            }
        }
    })
})

// Crear cuenta docente
router.post('/crear-cuenta-docente', (req, res) =>{
    const nombre = req.body.nombre;
    const rut = req.body.rut;
    const password = req.body.password;
    const email = req.body.email;
    const direccion = req.body.direccion;
    const idTipo = req.body.idTipo;
    let sql1 = `SELECT CAST(idUsuario as int) as idUsuario_int FROM Usuario ORDER BY idUsuario_int desc LIMIT 1;`;
    conexion.query(sql1, (error, results, fields) =>{
        if (error) throw error;
        else{
            if(results.length==1){
                //console.log(results[0].idUsuario_int)

                const idUsuario = String(results[0].idUsuario_int+1).padStart(10, 0);

                let sql2 = `insert into Usuario values('${idUsuario}', '${nombre}', '${rut}', '${password}', '${email}', '${direccion}', '${idTipo}')`;
                conexion.query(sql2, (error, results, fields) =>{
                    if(error) throw error;
                    else{
                        let sql3 = `insert into Docente values('${idUsuario}')`;
                        conexion.query(sql3, (error, results, fields) =>{
                            res.json({"mensaje": true})
                        })
                        
                    }
                })
            }
        }
    })
})

// Crear cuenta administrador
router.post('/crear-cuenta-administrador', (req, res) =>{
    const nombre = req.body.nombre;
    const rut = req.body.rut;
    const password = req.body.password;
    const email = req.body.email;
    const direccion = req.body.direccion;
    const idTipo = req.body.idTipo;
    let sql1 = `SELECT CAST(idUsuario as int) as idUsuario_int FROM Usuario ORDER BY idUsuario_int desc LIMIT 1;`;
    conexion.query(sql1, (error, results, fields) =>{
        if (error) throw error;
        else{
            if(results.length==1){
                //console.log(results[0].idUsuario_int)

                const idUsuario = String(results[0].idUsuario_int+1).padStart(10, 0);

                let sql2 = `insert into Usuario values('${idUsuario}', '${nombre}', '${rut}', '${password}', '${email}', '${direccion}', '${idTipo}')`;
                conexion.query(sql2, (error, results, fields) =>{
                    if(error) throw error;
                    else{
                        res.json({"mensaje": true})
                    }
                })
            }
        }
    })
})

// Crear cuenta apoderado
router.post('/crear-cuenta-apoderado', jsonParser, (req, res) =>{
    const nombre = req.body.nombre;
    const rut = req.body.rut;
    const password = req.body.password;
    const email = req.body.email;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono
    const idTipo = 4;
    let sql1 = `SELECT CAST(idUsuario as int) as idUsuario_int FROM Usuario ORDER BY idUsuario_int desc LIMIT 1;`;
    conexion.query(sql1, (error, results, fields) =>{
        if (error) throw error;
        else{
            if(results.length==1){
                //console.log(results[0].idUsuario_int)

                const idUsuario = String(results[0].idUsuario_int+1).padStart(10, 0);

                let sql2 = `insert into Usuario values('${idUsuario}', '${nombre}', '${rut}', '${password}', '${email}', '${direccion}', '${idTipo}')`;
                conexion.query(sql2, (error, results, fields) =>{
                    if(error) throw error;
                    else{
                        let sql3 = `insert into Apoderado values('${idUsuario}', '${telefono}')`;
                        conexion.query(sql3, (error, results, fields) =>{
                            res.json({"mensaje": true})
                        })
                    }
                })
            }
        }
    })
})

// Editar perfil
router.put('/editar-perfil', (req, res) =>{
    const idUsuario = req.body.idUsuario;
    const nombre = req.body.nombre;
    const password = req.body.password;
    const email = req.body.email;
    const direccion = req.body.direccion;

    let sql = `update Usuario
                set nombre='${nombre}', password='${password}', email='${email}', direccion='${direccion}'
                where idUsuario='${idUsuario}'`;

    conexion.query(sql, (error, results, fields) =>{
        if(error) throw error;
        else{
            res.json({mensaje: true});
        }
    })
})

module.exports = router