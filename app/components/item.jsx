'use strict'

import React, { Component } from 'react'
import { ListGroupItem, Button, Glyphicon } from 'react-bootstrap'

class Item extends Component{
	render() {
		return(
			<ListGroupItem bsStyle="success">
				<Button>
					<Glyphicon glyph="trash" />
				</Button>
				&nbsp;&nbsp;
				{this.props.title}
			</ListGroupItem>
		)
	}
}

export default Item