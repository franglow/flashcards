import { RECIEVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function entries (state = inicialState, action) {
//FIXME
console.log('entries en el reducer/index.js action',action)
console.log('entries en el reducer/index.js action.type',action.type)
console.log('entries en el reducer/index.js action.decks',action.decks)
// console.log('entries en el reducer/index.js action.deck.decks',action.deck.decks)

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
		case ADD_CARD:
			// let name = action.deck.decks
			return {
				// state[name].questions.push(name.questions)
				...state.decks,
			}
		default :
			return state
	}
}

const inicialState = {
	decks : {
	  React: {
	    title: 'React',
	    questions: [
	      {
	        question: 'What is React?',
	        answer: 'A library for managing user interfaces'
	      },
	      {
	        question: 'Where do you make Ajax requests in React?',
	        answer: 'The componentDidMount lifecycle event'
	      }
	    ]
	  },
		JavaScript: {
	    title: 'JavaScript',
	    questions: [
	      {
	        question: 'What is a closure?',
	        answer: 'The combination of a function and the lexical environment within which that function was declared.'
	      }
	    ]
	  }
	}
}

export default entries
