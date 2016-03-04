'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Row, Input, ButtonInput } from 'react-bootstrap'

class Add extends Component{
	constructor(props) {
		super(props)

		// definimos que la funcion tenga alcance local
		this._handleAdd = this._handleAdd.bind(this)
	}

	_handleAdd(event) {
    var elements = ReactDOM.findDOMNode(this.refs.nameTask)
    var nameTask = elements.querySelector('input').value
    var objTask = {
      id: new Date().toJSON(),
      name: nameTask
    }

    elements.querySelector('input').value = ''

    this.props.add(objTask);
	}

	render() {
		return(
      <form>
        <fieldset>
          <Row>
          	<Input 
          		ref='nameTask' 
          		type='text' 
          		label='Tarea' 
          		placeholder='Nombre de la tarea' 
          		 />
          </Row>
          <Row>
          	<ButtonInput onClick={this._handleAdd} value='Registrar' />
          </Row>
        </fieldset>
      </form>
		)
	}
}

export default Add