/*
[problema]
Agragando el asynchstorage.
Ya agregue los metodos en el api.js para luego
importarlos ac'a y ver que pasa? nada
ver acá como implementa el async
https://www.tutorialspoint.com/react_native/react_native_asyncstorage.htm
[solucion]
Lo que pasaba es que no le estaba pasando un objeto como parametro
de value al margeItem

[problema]
Estoy viendo como armar el objeto en el api.js
Ver como manejar parametros en js6

[solucion]
Aparentemente el problema reside en que debería guardar los datos en algo asi:
    Object {...}
pero actualmente solo s emuestra algo asi 
    {...}


[problema]
Tengo un problema de que setState no actualiza inmediatamente el this.state
por lo tanto cuando quiero listar los decks viene vacio 2 veces y la tercera con datos.
https://reactjs.org/docs/react-component.html#setstate
https://github.com/facebook/react/issues/11527#issuecomment-360199710

La diferencia que tengo por el momento en al Add"Componente" está en el metodo submit.
Cuando agrega una entrada, le envía la [key]:entrada, y cuando hace un reset le envía un [key]:cartel.

[Tengo que sacar el form y agregar un boton y un input comun para ver como responde.(si responde ok!)]

ver este email: https://mail.google.com/mail/u/0/#inbox/162f2c09beb4e7f3

[Chekear el handle submit para ver si puedo actualizar el setState y ver los datos en el input que puse debajo.
(Ya lo he chekeado y funciona lo de la linea anterior.!!!)]

Ahora estoy siguiendo el flow de los datos, hasta ahora el addEntry del action recibe ok la info!

Agregar una example card usando la lógica que se muestra en el udacimeal de la lesson 2.3 del React and Redux minuto 9 aprox.

PORQUE NUNCA USE getState() ! ! ! ! ! ! ! !
windows.__REDUX_DEVTOOLS_EXTENSION__ && windows.__REDUX_DEVTOOLS_EXTENSION__()

el state de la app deberia ser 
state = {
  decks : {
  
  }
}

[solucion]
Remover Redux por el momento!.
Luego implementarlo siguiendo sus docs oficiales.


Estoy dentro del render de DeckList que no me muestra los values.
pausa ||



Tener en cuenta esto ((Viendo lo del principio de Reconciliation debo probar sacar el <View> a fuera de la iteracion y agregarle un <ul> como hijo,
luego dentro de la iteracion agrego los <li> con su correcpondiente key={} para crear una lista ordenada y mejor performante()aparentemente.))
Ver tambien si es que el reducer está creando correctamente el nuevo estado de la app
POR QUE NUNCA USE GETSTATE() FROM REDUX!!!! ???

Hasta el momento 25/05/18 en el log puego ver que cuando agrego un DESK lo agrega el state de las props. Pero en formato diferente al DECK 
de ejemplo de que tengo asique hay que ver como igualar los formatos.

*/
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import t from 'tcomb-form-native'
import { submitDeckTitle, getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { addEntry, recieveDecks } from '../actions'

const Form = t.form.Form;

const Deck = t.struct({
	deckTitle: t.String,
})

const options = {
  fields: {
    deckTitle: {
      label: 'What is the tile of your new deck',
      error: 'Please add a title!'
    }
  }
}

class AddDeck extends Component {

  state = {
    decks: null
  }

  clearForm = () => {
    // clear content from all textbox
    this.setState(() => ({}));
  }

  handleSubmit = () => {
    const value = this._form.getValue().deckTitle // use that ref to get the form value
    const { dispatch } = this.props
    if (value) {
      // Update redux
      //guarda la nueva entrada en el ReduxStore
      dispatch(addEntry({
        decks: {
          [value] : {
            title: value,
            questions: [{}]          
          }
        }
      }))

      // Reset del state
      this.setState({
        decks: {
          [value] : {
            title: value,
            questions: [{}]          
          }
        }
      },/*//FIXME*/console.log('handleSubmit after setstate', this.state))

    // dispatch(recieveDecks(this.state.decks))      
      // submitDeckTitle({ value })   

      // this.clearForm()
    }
  }

	render() {
console.log('state at addDeck',this.state)
console.log('Props at addDeck',this.props)

		return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c} // assign a ref
          type={Deck} //  Notice the addition of the Form component
          options={options}
          // value={this.state}
        />   
        <Button 
          title='Submit'
          onPress={this.handleSubmit}
        />
        <Text>{'user input: ' + this.state}</Text>
      </View>
		)
	}
}

// function mapStateToProps (entries) {
function mapStateToProps (state) {
  return {
    state
  }
}

// const formStyles = {
//   ...Form.stylesheet,
//   controlLabel: {
//     normal: {
//       // color: 'blue',
//       fontSize: 35,
//       marginBottom: 7,
//       // fontWeight: '600'
//     },
//     error: {
//       // color: 'red',
//       fontSize: 18,
//       marginBottom: 7,
//       fontWeight: '600'
//     }
//   }
// }

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default connect(mapStateToProps)(AddDeck)
// export default AddDeck