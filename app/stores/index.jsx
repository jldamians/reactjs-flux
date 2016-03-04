'use strict'

import Dispatcher import '../dispatcher'
import constants import '../constants'

// sirve para generar eventos
// on: crea un evento
// emit: dispara un evento creado
import {EventEmitter} from 'events'


const CHANGE_EVENT = 'change'

// variable que contendra los datos de la aplicacion
let _store = {
	list: []
}

// La clase 'TodoStore' hereda la clase 'EventEmitter'
class TodoStore extends EventEmitter {
	addChangeListener(handle) {
		this.on(CHANGE_EVENT, handle)
	}

	removeChangeListener(handle) {
		this.on(CHANGE_EVENT, handle)
	}

	getList() {
		return _store.list
	}
}

// instanciamos el store

const todoStore = new TodoStore()

Dispatcher.register((payload) => {
	const action = payload.action

	switch(action) {
		case constants.ADD_TASK:
			_store.list.push(action.task)

   		todoStore.emit(CHANGE_EVENT)

    	break
    case constants.REMOVE_TASK:
    	_store.list.splice(action.task.id)

    	todoStore.emit(CHANGE_EVENT)

    	break
    default:
    	return true
	}
})

export default todoStore