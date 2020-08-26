// Navigation/Navigation.js

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const Stack = createStackNavigator()

function SearchStackNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Search"
					component={Search}
					options={{ title: 'Rechercher' }}
				/>
				<Stack.Screen
					name="FilmDetail"
					component={FilmDetail}
					options={{ title: 'Détail' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default SearchStackNavigator
