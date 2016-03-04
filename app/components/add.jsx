'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Row, Input, ButtonInput } from 'react-bootstrap'

class Add extends Component{
	constructor(props) {
		super(props)

		//this._handleAdd = this._handleAdd.bind(this)
	}

	_handleAdd(event) {
    var elements = ReactDOM.findDOMNode(this.refs.nameTask)
    var nameTask = elements.querySelector('input').value

    console.log(nameTask)
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