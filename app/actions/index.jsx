'use strict'

import Dispatcher from '../dispatcher'
import constants from '../constants'

// metodos que notifican a traves del "dispatcher",
// una accion a uno o mas "stores"
let actions = {
	// a travez del "dispatcher" indicamos al "store"
	// que vamos a agregar un dato a las lista de "tasks"
	addTask: function(task) {
		Dispatcher.handleAction({
			actionType: constants.ADD_TASK,
			data: task
		})
	},
	// a travez del "dispatcher" indicamos al "store"
	// que vamos a remover un dato de la lista de "tasks"
	removeTask: function(id) {
		Dispatcher.handleAction({
			actionType: constants.REMOVE_TASK,
			id: id
		})
	}
}

export default actions