
import React from 'react'

export function getCardsMetaInfo (card) {
	const decks = {
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
	  }
	}
	// Si card el argumento de la funcion es indefinido devuelvo este objeto, sino devuelvo la metrica 
	// que me indica el argumento.
	return typeof card === 'undefined'
    ? decks
    : decks[card]
}

export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}