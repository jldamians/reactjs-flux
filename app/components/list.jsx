'use strict'

import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

import Item from './item'

class List extends Component{
  render(){
    return(
      <ListGroup>
        {
          this.props.items.map((item) => {
            return  <Item key={item.id} title={item.title} />
          })
        }
      </ListGroup>
    )
  }
}

export default List