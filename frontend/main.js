import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

import Contato from './modules/Contato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init()
cadastro.init()

const registrar = new Contato('.form-cadastro-contato')
const editar = new Contato('.form-editar-contato')
registrar.init();
editar.init();

// import "./assets/css/style.css";
