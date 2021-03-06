import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contents from './src/navigation/Contents'
import ItemDetail from './src/navigation/ItemDetail'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Movies App"
          component={Contents}
          options={{
            headerStyle: { backgroundColor: '#2c3e50' },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetail}
          options={({ route }) =>
            route.params.name
              ? {
                  title: route.params.name,
                  headerStyle: {
                    backgroundColor: '#fff',
                  },
                  headerTitleStyle: {
                    color: 'brack',
                  },
                  headerBackTitle: 'Back to List',
                }
              : {
                  title: route.params.title,
                  headerStyle: {
                    backgroundColor: '#fff',
                  },
                  headerTitleStyle: {
                    color: 'brack',
                  },
                  headerBackTitle: 'Back to List',
                }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
