const express = require('express');
const bodyParser = require('body-parser');
const ConfigEnv = require('./config');
const HTTP_PORT = ConfigEnv.HTTP_PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var datos = [
  {"apellido": "Apellido1","nombre": "Nombre1","dni": "00000001","sexo": "F"    },
  {"apellido": "Apellido2","nombre": "Nombre2","dni": "00000012","sexo": "M"    },
  {"apellido": "Apellido3","nombre": "Nombre3","dni": "00000023","sexo": "F"    },
  {"apellido": "Apellido4","nombre": "Nombre4","dni": "00000034","sexo": "M"    },
  {"apellido": "Apellido5","nombre": "Nombre5","dni": "00000045","sexo": "F"    },
  {"apellido": "Apellido6","nombre": "Nombre6","dni": "00000056","sexo": "M"    },
  {"apellido": "Apellido7","nombre": "Nombre7","dni": "00000067","sexo": "F"    },
  {"apellido": "Apellido8","nombre": "Nombre8","dni": "00000078","sexo": "M"    },
  {"apellido": "Apellido9","nombre": "Nombre9","dni": "00000089","sexo": "F"    },
  {"apellido": "Apellido10","nombre": "Nombre10","dni": "00000090","sexo": "M"    },
  {"apellido": "Apellido11","nombre": "Nombre11","dni": "00000101","sexo": "F"    },
  {"apellido": "Apellido12","nombre": "Nombre12","dni": "00000112","sexo": "M"    },
  {"apellido": "Apellido13","nombre": "Nombre13","dni": "00000123","sexo": "F"    },
  {"apellido": "Apellido14","nombre": "Nombre14","dni": "00000134","sexo": "M"    },
  {"apellido": "Apellido15","nombre": "Nombre15","dni": "00000145","sexo": "F"    },
  {"apellido": "Apellido16","nombre": "Nombre16","dni": "00000156","sexo": "M"    },
  {"apellido": "Apellido17","nombre": "Nombre17","dni": "00000167","sexo": "F"    },
  {"apellido": "Apellido18","nombre": "Nombre18","dni": "00000178","sexo": "M"    },
  {"apellido": "Apellido19","nombre": "Nombre19","dni": "00000189","sexo": "F"    },
  {"apellido": "Apellido20","nombre": "Nombre20","dni": "00000190","sexo": "M"    }
];




const routerControl = express.Router();
routerControl.use((req, res, next) => {
  //console.log(req);
  if (req.body.usuario === ConfigEnv.USER_API && req.body.contrasena === ConfigEnv.PASS_API) {
    next();
  } else {
    res.send({ 
        mensaje: 'Usuario o contraseña invalido.'
    });
  }
});

app.post('/personas', routerControl, (req, res) => {
  res.json(datos);
});


app.listen(HTTP_PORT, () => console.log(`Escuchando en el puerto ${HTTP_PORT}`));

