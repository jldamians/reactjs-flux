'use strict'

import Dispatcher from '../dispatcher'
import constants from '../constants'
import _tasks from '../assets/tasks'

// sirve para generar eventos
// on: crea un evento
// emit: dispara un evento creado
import {EventEmitter} from 'events'

// Nombre del evento que sera creado desde el "component"
// solo con llamar la funcion "addChangeListener" de este "store".
// Despues de creado, podran ser accedidas desde los metodos
// del "Action"
const CHANGE_EVENT = 'change'

// variable que contendra los datos de la aplicacion
let _store = {
	list: []
}

// La clase "Store" hereda la clase "EventEmitter"
// Esta clase nos permite definir un evento para el store.
// Las funciones deberan ser ejecutadas desde el "component"
class Store extends EventEmitter {
	addChangeListener(handle) {
		this.on(CHANGE_EVENT, handle)
	}

	removeChangeListener(handle) {
		this.removeListener(CHANGE_EVENT, handle)
	}

	getList() {
		return _store.list
	}

	loadList() {
		Dispatcher.handleAction({
			actionType: constants.LOAD_TASK,
			data: _tasks
		})
	}
}

// instanciamos el store
const store = new Store()

// suscribimos(registramos) las acciones que seran
// accedidas desde los actions (para publicar algun dato)
Dispatcher.register((payload) => {
	const action = payload.action

	switch(action.actionType) {
		case constants.ADD_TASK:
			_store.list.push(action.id)

   		store.emit(CHANGE_EVENT)

    	break
    case constants.REMOVE_TASK:
    	let item = -1 ;

    	_store.list.forEach(function(element, index){
    		if ( element.id === action.id ) {
    			item = index
    		}
    	})

    	if ( item != -1 ) {
    		_store.list.splice(item, 1)
    		store.emit(CHANGE_EVENT)
    	}

    	break
    case constants.LOAD_TASK:
    	_store.list = action.data

    	store.emit(CHANGE_EVENT)

    	break
    default:
    	return true
	}
})

export default store