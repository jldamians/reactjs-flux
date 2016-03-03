'use strict'

import React, { Component } from 'react'
//import { ListGroupItem } from 'react-bootstrap'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

class Item extends Component{
	render() {
		return(
			<ListGroupItem bsStyle="success">
				{this.props.title}
			</ListGroupItem>
		)
	}
}

export default Item