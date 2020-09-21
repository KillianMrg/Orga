// Navigation/Navigation.js

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
//import Favorites from '../Components/Favorites'

const Stack = createStackNavigator()
//const Tab = createBottomTabNavigator()

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

/*function BottomTabNavigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Search" component={Search} />
				<Tab.Screen name="Favorites" component={Favorites} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}*/

export default SearchStackNavigator
