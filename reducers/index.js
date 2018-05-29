import { RECIEVE_DECKS, ADD_DECK } from '../actions'

function entries (state = inicialState, action) {
//FIXME	
	console.log('entries en el reducer action.type',action.type)
	console.log('entries en el reducer action.deck',action.deck)
	console.log('entries en el reducer state',state)
	switch (action.type) {
		case RECIEVE_DECKS:
			return {
				...state,
				...action.decks,
			}
		case ADD_DECK:
			return {
				...state,
				...action.deck
			}
		default :
			return state
	}
}

const inicialState = {
	decks : {
	  Example: {
	    title: 'Example',
	    questions: [
	      {
	        question: 'What is Example?',
	        answer: 'A way to show how it is the shape'
	      },
	      {
	        question: 'Where do you make new decks like this?',
	        answer: 'Lets start tapping buttons!'
	      }
	    ]
	  }
	}
}

export default entries