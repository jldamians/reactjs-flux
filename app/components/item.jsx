'use strict'

import React, { Component } from 'react'
import { ListGroupItem, Button, Glyphicon } from 'react-bootstrap'

class Item extends Component{
	render() {
		return(
			<ListGroupItem bsStyle="success">
				<Button onClick={this.props.remove.bind(null, this.props.data.id)}>
					<Glyphicon glyph="trash" />
				</Button>
				&nbsp;&nbsp;
				{this.props.data.name}
			</ListGroupItem>
		)
	}
}

export default Item