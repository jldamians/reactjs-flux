'use strict'

import React from 'react'
import { render } from 'react-dom'

import Main from './components/main'

var _tasks = [
  { id: 1, title: "Levantamiento de Información"},
  { id: 2, title: "Requerimientos funcionales"},
  { id: 3, title: "Diseño de DB"},
  { id: 4, title: "Desarrollo del Sistema"},
  { id: 5, title: "Pruebas Unitarias"},
  { id: 6, title: "Implementacion en Producción"}
]

render(<Main tasks={_tasks} />, document.getElementById('app'))


