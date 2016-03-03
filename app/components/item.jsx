import React, { Component } from 'react'

class Item extends Component{
	render() {
		return(
			<li className='media'>				
				<div className='media-body'>
					<h4>{this.props.name}</h4>

					<p>
						<span>Puesto Laboral: {this.props.title}</span>
					</p>
					<p>
						<span>Area de Trabajo: {this.props.department}</span>
					</p>
				</div>
				<hr/>
			</li>
		)
	}
}

export default Item