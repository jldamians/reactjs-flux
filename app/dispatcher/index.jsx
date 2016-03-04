'use strict'

// sistema de mensajeria tipo "Publish and Subscribe"
// envia notificaciones a los "stores", estas notificaciones son modeladas como 'Actions'
import { Dispatcher } from 'flux'

class ActionDispatcher extends Dispatcher {
	handleAction(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		})
	}
}

const actionDispatcher = new ActionDispatcher()

default export actionDispatcher
