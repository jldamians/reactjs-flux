'use strinct'

import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import List from './list'
import Add from './add'

import Store from '../stores'
import Action from '../stores'

class Main extends Component {
  constructor(props) {
  	super(props)

  	this._getAppState = this._getAppState.bind(this)
  	this._onChange = this._onChange.bind(this)

  	this.state = this._getAppState()
  }

	_getAppState() {
	  return {
	  	listTasks: Store.getList()
	  }
	}

  _onChange(){
    this.setState(this._getAppState())
  }

  // ciclo de vida del componente, solo se ejecutara una vez,
  // cuando el renderizado haya concluido, y si utilizas react unicamente en el cliente
  componentDidMount(){
  	Store.loadList()
  }

  // ciclo de vida del componente, solo se ejecutara una vez,
  // cuando el renderizado haya concluido, y si utilizas react en el cliente o servidor
  componentWillMount() {
    Store.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    Store.removeChangeListener(this._onChange)
  }

	render() {
		return (
		  <Grid>
		    <Row className="show-grid">
		    	<Col xs={6} sm={6} md={6} xsOffset={3} smOffset={3} mdOffset={3}>
		    		<Add />
						<List items={this.state.listTasks} />
					</Col>
		    </Row>
		  </Grid>
		)
	}
}

export default Main
