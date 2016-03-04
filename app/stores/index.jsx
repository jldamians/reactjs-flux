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

// La clase 'Store' hereda la clase 'EventEmitter'
class Store extends EventEmitter {
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

const store = new Store()

Dispatcher.register((payload) => {
	const action = payload.action

	switch(action) {
		case constants.ADD_TASK:
			_store.list.push(action.data)

   		store.emit(CHANGE_EVENT)

    	break
    case constants.REMOVE_TASK:
    	_store.list.splice(action.data.id)

    	store.emit(CHANGE_EVENT)

    	break
    default:
    	return true
	}
})

export default store