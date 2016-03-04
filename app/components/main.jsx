'use strinct'

import React, {Component} from 'react'
//import { Grid, Row, Col } from 'react-bootstrap'

import List from './list'

class Main extends Component {
	render() {
		<List items={this.props.tasks} />
	}
	/*render(){
		return(
			<Grid>
				<Row className="show-grid">
					<Col xs={6} sm={6} md={6} mdOffset={3}>
						<List items={this.props.tasks} />
					</Col>
				</Row>
			<Grid>
		)
	}*/
}

export default Main
