import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import {Helmet} from "react-helmet";
import App from './App';
import * as serviceWorker from './serviceWorker';

import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router  history={history}>
    <Helmet>
      <title> Laboratorio Clinico Humani Xela</title>
      <link rel= "icon" type="image/png" sizes='32x32' href='.\public\isotipo.png'
      />
      <meta name="Laboratorio Humani, es un laboratorio clinico ubicado en Quetzaltenango cuyo principal objetivo es brindar un servicio de calidad y con calidez a nuestros pacientes" content=' En la pagina de laboratorio Humani encontras como contactarte con nosotros y nuestros servicios.'
      />
    
    </Helmet>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
