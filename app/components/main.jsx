'use strinct'

import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import List from './list'
import Add from './add'

import Store from '../stores'
import Action from '../actions'

class Main extends Component {
  constructor(props) {
  	super(props)

  	// indicamos _getAppState y _handleChange
  	// estan dentro del alcance de la clase (es muy necesario)
  	this._getAppState = this._getAppState.bind(this)
  	this._handleChange = this._handleChange.bind(this)
  	this._handleAdd = this._handleAdd.bind(this)
  	this._handleRemove = this._handleRemove.bind(this)

  	// estado del "componente"
  	this.state = this._getAppState()
  }

  // genera, setea y retorna los "state" del componente
	_getAppState() {
	  return {
	  	listTasks: Store.getList()
	  }
	}

	// este metodo sera el handle del evento del "dispatcher"
	// el "dispatcher" para cada accion que recibe, ejecuta este metodo
  _handleChange(){
    this.setState(this._getAppState())
  }

  _handleAdd(newTask){
    Action.addTask(newTask);
  }

  _handleRemove(id){
    Action.removeTask(id);
  }

  // ciclo de vida del componente, solo se ejecutara una vez,
  // cuando el renderizado haya concluido, y si utilizas react unicamente en el cliente
  componentDidMount(){
  	Store.loadList()
  }

  // ciclo de vida del componente, solo se ejecutara una vez,
  // cuando el renderizado haya concluido, y si utilizas react en el cliente o servidor
  componentWillMount() {
    Store.addChangeListener(this._handleChange)
  }

  componentWillUnmount() {
    Store.removeChangeListener(this._handleChange)
  }

  // cada vez que un "state" es seteado, se renderiza el componente
	render() {
		return (
		  <Grid>
		    <Row className="show-grid">
		    	<Col xs={6} sm={6} md={6} xsOffset={3} smOffset={3} mdOffset={3}>
		    		<Add add={this._handleAdd} />
						<List items={this.state.listTasks} remove={this._handleRemove} />
					</Col>
		    </Row>
		  </Grid>
		)
	}
}

export default Main
