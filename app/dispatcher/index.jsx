'use strict'

// sistema de mensajeria tipo "Publish and Subscribe"
// envia notificaciones a los "stores", estas notificaciones son modeladas como 'Actions'
import { Dispatcher } from 'flux'

let AppDispatcher = new Dispatcher()

AppDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  })
}

export default AppDispatcher