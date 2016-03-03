import React, { Component } from 'react'
import Item from './item'

class List extends Component{
  render(){
    return(
      <ul className='media-list'>
        {
          this.props.listado.map((empleado) => {
            return  <Item key={empleado.id} 
                        name={empleado.name} 
                        picture={empleado.picture} 
                        title={empleado.title} 
                        department={empleado.department} />
          })
        }
      </ul>
    )
  }
}

export default List