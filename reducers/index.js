import { RECIEVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function entries (state = initialState, action) {
	switch (action.type) {
		case RECIEVE_DECKS:
			if (state) {
				return {
					decks: {
						...state.decks,
						...action.decks
						}
				}
			}
			return {
				decks: {
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
			return {
				decks : {
					...state.decks,
					[action.deck.data.title]: {
						title: state.decks[action.deck.data.title].title,
						questions: [
							...state.decks[action.deck.data.title].questions,
							{
								question: question,
								answer: answer
							},
						],
					},
				}
			}
		default :
			return state
	}
}

export default entries

const initialState = {
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
