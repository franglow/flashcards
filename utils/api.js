import { AsyncStorage } from 'react-native'
import { getCardsMetaInfo } from './helpers'

export const DECK_STORAGE_KEY = 'FlashCards:deck'

export function submitDeckTitle ({ value }) {
	let data = {
    [value] : {
      title: value,
      questions: []
    }
 	}
	return AsyncStorage.mergeItem('FlashCards:deck', JSON.stringify(data), () => {
			AsyncStorage.getItem('FlashCards:deck', (err, result) => {
				// console.log('api.js getItem OK',result)
			})
		})
}

export function submitCard ({ data }) {
	data = JSON.parse(data)
	let card = {
    [data.title] : {
      title: data.title,
      questions: [
				{
					question: data.question,
					answer: data.answer,
				},
			],
    },
 	}
	AsyncStorage.getItem('FlashCards:deck', (err, result) => {}).then( (result) => {
		result = JSON.parse(result)
		result[data.title].questions.push({
			question:data.question,
			answer:data.answer
		})
		let card = {
			[data.title] : {
				title: data.title,
				questions: result[data.title].questions,
			}
		}
		return AsyncStorage.mergeItem('FlashCards:deck', JSON.stringify(card), () => {
				AsyncStorage.getItem('FlashCards:deck', (err, result) => {
					// console.log('api.js getItem OK',result)
				})
			})
	})
}

export function getDecks () {
	return AsyncStorage.getItem('FlashCards:deck', (err, result) => {
	}).then( (result) => JSON.parse(result)
	)
}
