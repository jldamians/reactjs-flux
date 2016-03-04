'use strict'

import Dispatcher import '../dispatcher'
import constants import '../constants'

let actions = {
	addTask: function(task) {
		Dispatcher.handleAction({
			actionType: constants.ADD_TASK,
			data: task
		})
	},
	removeTask: function(id) {
		Dispatcher.handleAction({
			actionType: constants.REMOVE_TASK,
			data: id
		})
	}
}

export default actions