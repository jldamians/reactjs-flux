'use strict'

import React, { Component } from 'react'
//import { ListGroup } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import Item from './item'

class List extends Component{
  render(){
    return(
      <ListGroup>
        {
          this.props.tasks.map((task) => {
            return  <Item key={task.id} title={task.title} />
          })
        }
      </ListGroup>
    )
  }
}

export default List