'use strict'

import Dispatcher import '../dispatcher'
import constants import '../constants'

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
// esta clase nos permite definir un evento para el store
// las funciones deberan ser ejecutadas desde el "component"
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
}

// instanciamos el store
const store = new Store()

// suscribimos(registramos) las acciones que seran
// accedidas desde los actions (para publicar algun dato)
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