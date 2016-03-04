'use strict'

import React, { Component } from 'react'
import { Row, Input, ButtonInput } from 'react-bootstrap'

class Add extends Component{
	render() {
		return(
            <form>
              <fieldset>
                <Row>
                	<Input type="text" label="Tarea" placeholder="Nombre de la tarea" />
                </Row>
                <Row>
                	<ButtonInput value="Registrar" />
                </Row>
              </fieldset>
            </form>
		)
	}
}

export default Add