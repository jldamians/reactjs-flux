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

  	this.state = {
  		return _getAppState();
  	}
  }

	_getAppState() {
	  return {
	  	listTasks: Store.getList()
	  }
	}

  _onChange(){
    this.setState(_getAppState())
  }

  componentDidMount(){
  	Store.loadList()
  }


  componentWillMount() {
    Store.addChangeListener(_onChange)
  }

  componentWillUnmount() {
    Store.removeChangeListener(_onChange)
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
