export const RECIEVE_DECKS = 'RECIEVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

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
