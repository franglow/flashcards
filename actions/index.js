export const RECIEVE_DECKS = 'RECIEVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function recieveDecks ( decks ) {
// export function recieveDecks () {
//FIXME
console.log('action/index.js recieveDecks',decks)
	return {
		type: RECIEVE_DECKS,
		decks,
	}
}

export function addEntry ( deck ) {
//FIXME
console.log('action/index.js addEntry',deck)
	return {
		type: ADD_DECK,
		deck,
	}
}

export function addCard ( deck ) {
//FIXME
console.log('action/index.js addCard',deck)
	return {
		type: ADD_CARD,
		deck,
	}
}
