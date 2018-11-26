import { RECIEVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function entries (state, action) {
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
			const { title, question, answer} = action.deck.data
			state.decks[title].questions.push({question,answer})
			return {
				decks : {
					...state.decks,
				}
			}
		default :
			return state
	}
}

export default entries
