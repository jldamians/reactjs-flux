'use strict'

import React, { Component } from 'react'
import { ListGroupItem } from 'react-bootstrap'

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