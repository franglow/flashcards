import { RECIEVE_DECKS, ADD_DECK } from '../actions'

function entries (state = inicialState, action) {
//FIXME
console.log('entries en el reducer/index.js action',action)
console.log('entries en el reducer/index.js action.type',action.type)
console.log('entries en el reducer/index.js action.decks',action.decks)
console.log('entries en el reducer/index.js state',state)

	switch (action.type) {
		case RECIEVE_DECKS:
			return {
				decks: {
					...state.decks,
					...action.decks
					}
			}
		case ADD_DECK:
			return {
				decks :	{
					...state.decks,
					...action.deck.decks
					}
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
	        answer: 'A way to show how the hand come'
	      },
	      {
	        question: 'Where do you make new decks like this?',
	        answer: 'Lets start tapping buttons!'
	      }
	    ]
	  },
		ExampleDos: {
	    title: 'ExampleDos',
	    questions: [
	      {
	        question: 'What is ExampleDos?',
	        answer: 'A way to show how the hand come'
	      },
	      {
	        question: 'Where do you make new decks like this?',
	        answer: 'Lets start tapping buttons Dos : )!'
	      },
				{
	        question: 'Where do you make new decks like this?',
	        answer: 'Lets start tapping buttons Dos : )!'
	      }
	    ]
	  }
	}
}

export default entries
