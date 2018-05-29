import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class QuizView extends Component {
	// Acá debería recibir por parametros el key para mostrar 
	// la flashcard. Algo asi como la linea siguiente.
	// static navigationOptions = ({ navigation }) => { const { entryId } = navigation.state.params }	
	render () {
	  return (
	    <View>
	      {'question' === backFrom ? Question : Answer}

	      {Object.keys(metrics).map((metric) => {
	        const { getIcon, displayName, unit, backgroundColor } = getMetricMetaInfo(metric)
	        return (
	          <View style={styles.metric} key={metric}>
	            {getIcon()}
	            <View>
	              <Text style={{fontSize: 20}}>
	                {displayName}
	              </Text>
	              <Text style={{fontSize: 16, color: gray}}>
	                {metrics[metric]} {unit}
	              </Text>
	            </View>
	          </View>
	        )
	      })}
	    </View>
	  )

	}

}